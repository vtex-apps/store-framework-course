export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: `You didn't provide a 'product.jsonc' file`,
      test: async ({ ctx }) => {
        ctx.pdp = await ctx.getFile('store/blocks/product.jsonc')
        return true
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `product.jsonc` file",
      test: ({ ctx }) => {
        ctx.blocks = ctx.parseJsonc(ctx.pdp)
        return true
      },
    },
    {
      description: 'Crete a product template page',
      failMsg: "You didn't use a `store.product`",
      test: ({ ctx }) => {
        ctx.productBlock = ctx.blocks?.['store.product']
        return !!ctx.productBlock
      },
    },
    {
      description: 'Create a main row inside the product page',
      failMsg: "You didn't use nor defined a `flex-layout.row` in your product page",
      test: ({ ctx }) => {
        const {
          ramda: {  find },
        } = ctx
        const used = !!find<string>(elem => elem.includes('flex-layout.row'), ctx.productBlock.children)

        ctx.mainRow = ctx.blocks?.[find<string>(elem => elem.includes('flex-layout.row'), Object.keys(ctx.blocks)) as string]

        const defined = !!ctx.mainRow

        return used && defined
      },
    },
    {
      description: 'Define two columns inside the main row',
      failMsg: "There aren't two `flex-layout.col` inside your `flex-layout.row`",
      test: ({ ctx }) => {
        const {
          mainRow: { children },
          ramda: { find },
        } = ctx

        return children.length === 2 && !find((elem: string) => !elem.includes('flex-layout.col'), children)
      },
    },
    {
      description: 'Define `product-images` on the left column',
      failMsg: "You didn't define `product-images` on the left column",
      test: ({ ctx }) => {
        ctx.leftCol = ctx.blocks?.[ctx.mainRow.children[0]]
        return ctx.leftCol.children[0].includes('product-images')
      },
    },
    {
      description: 'Define `product-name`, `product-price` and `buy-button` on the right column',
      failMsg: "You didn't define `product-name`, `product-price` and `buy-button` on the right column",
      test: ({ ctx }) => {
        ctx.rightCol = ctx.blocks?.[ctx.mainRow.children[1]]
        const {
          rightCol: { children },
        } = ctx

        return (
          children.includes('product-name') && children.includes('product-price') && children.includes('buy-button')
        )
      },
    },
    {
      description: 'Control stretch and alignment of right column',
      failMsg: "You didn't use the props `preventVerticalStretch` and `verticalAlign`",
      test: ({ ctx }) => {
        const {
          rightCol: { props: rightColProps },
        } = ctx

        return rightColProps.verticalAlign === 'middle' && rightColProps.preventVerticalStretch
      },
    },
    {
      description: 'Define `product-price` with props',
      failMsg: "You didn't define `product-price` or defined the expected props",
      test: ({ ctx }) => {
        const {
          ramda: { find, keys },
        } = ctx
        const productPriceId = find(elem => (elem as any).includes('product-price'), keys(ctx.blocks))

        if (!productPriceId) {
          return false
        }

        const { props: productPriceProps } = ctx.blocks?.productPriceId

        return productPriceProps.showSavings && productPriceProps.showListPrice
      },
    },
  ],
} as TestCase
