export default {
  tests: [
    {
      description: 'Getting the files',
      failMsg: `Couldn't  get product.jsonc file`,
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.pdp = await getFile('store/blocks/product.jsonc')
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
      description: 'Use a breadcrumb',
      failMsg: "You didn't declare a `breadcrumb`",
      test: ({ ctx }) => {
        ctx.productBlock = ctx.blocks?.['store.product']
        return !!ctx.productBlock.children[0].includes('breadcrumb')
      },
    },
    {
      description: 'Used a product identifier',
      failMsg: "You didn't use a `product-identifier.product`",
      test: ({ ctx }) => {
        const {
          productBlock: { children: productChildren },
        } = ctx

        const mainRowId = productChildren[1]

        ctx.mainRow = ctx.blocks?.[mainRowId]

        ctx.rightCol = ctx.blocks?.[ctx.mainRow.children[1]]

        const {
          rightCol: { children: rightColChildren },
        } = ctx

        return !!rightColChildren[1].includes('product-identifier.product')
      },
    },
    {
      description: 'Create a row inside the right col with quantity and sku selectors',
      failMsg:
        "You didn't use and define a `flex-layout.row` in the right col with `sku-selector` and `product-quantity`",
      test: ({ ctx }) => {
        const {
          rightCol: { children: rightColChildren },
          ramda: { find },
        } = ctx

        const { children: rowChildren } = ctx.blocks?.[
          find((elem: string) => elem.includes('flex-layout.row'), rightColChildren) as string
        ]

        return (
          rowChildren.includes('sku-selector') && rowChildren.includes('product-quantity') && rowChildren.length === 2
        )
      },
    },
    {
      description: 'Define a shipping simulator in the right column',
      failMsg: "There isn't a `shipping-simulator` on the right column",
      test: ({ ctx }) => {
        const {
          rightCol: { children: rightColChildren },
        } = ctx

        return rightColChildren.includes('shipping-simulator')
      },
    },
  ],
} as TestCase
