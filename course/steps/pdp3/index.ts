export default {
  tests: [
    {
      description: `Getting the file`,
      failMsg: `Couldn't get product.jsonc`,
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.pdp = await getFile('store/blocks/product.jsonc')
        return true
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `product.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.blocks = parseJsonc(ctx.pdp)
        return !!ctx.blocks
      },
    },
    {
      description: 'Define related products shelf',
      failMsg: "You didn't define a `shelf.relatedProducts` in the end of the `store.product` template",
      test: ({ ctx }) => {
        ctx.productBlock = ctx.blocks?.['store.product']

        const {
          productBlock: { children },
        } = ctx

        return children[2].includes('shelf.relatedProducts')
      },
    },
    {
      description: 'Use and define a `stack-layout` on the left column',
      failMsg: "You didn't use and define a `stack-layout` on the left column",
      test: ({ ctx }) => {
        const {
          ramda: { find, keys },
        } = ctx
        const stackLayoutId = find((block: string) => block.includes('stack-layout'), keys(ctx.blocks)) as string

        ctx.stackLayout = ctx.blocks?.[stackLayoutId]

        const {
          productBlock: { children: productChildren },
        } = ctx

        const mainRowId = productChildren[1]

        const mainRow = ctx.blocks?.[mainRowId]

        const leftCol = ctx.blocks?.[mainRow.children[0]]

        return stackLayoutId && leftCol.children.includes(stackLayoutId)
      },
    },
    {
      description: 'Use product images and product brand within the stack layout',
      failMsg: "You didn't use a `product-images` and a `product-brand` in your `stack-layout` on the left column",
      test: ({ ctx }) => {
        const {
          stackLayout: { children },
        } = ctx

        return children[0].includes('product-images') && children[1].includes('product-brand')
      },
    },
    {
      description: 'Define correct props on `product-brand`',
      failMsg: "You didn't define the props correctly on `product-brand`",
      test: ({ ctx }) => {
        const {
          ramda: { keys, find },
        } = ctx
        const productBrandId = find((block: string) => block.includes('product-brand'), keys(ctx.blocks)) as string

        const { props: productBrandProps } = ctx.blocks?.[productBrandId]

        return !!productBrandProps.height
      },
    },
    {
      description: 'Define correct props on `sku-selector`',
      failMsg: "You didn't define the props correctly on `sku-selector`",
      test: ({ ctx }) => {
        const {
          ramda: { find, keys },
        } = ctx
        const skuSelectorId = find((block: string) => block.includes('sku-selector'), keys(ctx.blocks)) as string

        const { props: skuSelectorProps } = ctx.blocks?.[skuSelectorId]

        return Boolean(
          skuSelectorProps.initialSelection === 'empty' &&
            skuSelectorProps.showValueNameForImageVariation &&
            skuSelectorProps.showVariationsErrorMessage
        )
      },
    },
  ],
} as TestCase
