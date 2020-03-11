const BRANCH_NAME = 'search2'

export default {
  branch: BRANCH_NAME,
  issueNumber: 15,
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a search.jsonc and a default.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        ctx.search = await getFile('store/blocks/search.jsonc')
        ctx.default = parseJsonc(await getFile('store/blocks/default.jsonc'))
        return true
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `search.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.search = parseJsonc(ctx.search)
        return !!ctx.search
      },
    },
    {
      description: 'Make the third and fifth element, of your search result desktop layout, rows',
      failMsg: 'The third and fifth element of your `search-result-layout.desktop` are not rows',
      test: ({ ctx }) => {
        ctx.searchDesktop = ctx.search?.['search-result-layout.desktop']

        const { children } = ctx.searchDesktop

        ctx.topRowLabel = children[2]
        ctx.resultsRowLabel = children[4]

        return ctx.topRowLabel.includes('flex-layout.row') && ctx.resultsRowLabel.includes('flex-layout.row')
      },
    },
    {
      description: 'Top row should have `total-products.v2` and `order-by.v2`',
      failMsg: "The top row doesn't have `total-products.v2` and `order-by.v2`",
      test: ({ ctx }) => {
        ctx.topRow = ctx.search?.[ctx.topRowLabel]

        const { children: topRowChildren } = ctx.topRow

        return topRowChildren.includes('total-products.v2') && topRowChildren.includes('order-by.v2')
      },
    },
    {
      description: 'Use two columns inside the results row',
      failMsg: "There aren't two columns inside the results row",
      test: ({ ctx }) => {
        ctx.resultsRow = ctx.search?.[ctx.resultsRowLabel]

        const { children: resultsRowChildren } = ctx.resultsRow

        ctx.leftColLabel = resultsRowChildren[0]
        ctx.rightColLabel = resultsRowChildren[1]

        return (
          ctx.leftColLabel.includes('flex-layout.col') &&
          ctx.rightColLabel.includes('flex-layout.col') &&
          resultsRowChildren.length === 2
        )
      },
    },
    {
      description: 'Define the left column of the results row',
      failMsg: "You didn't define the left column of the results row",
      test: ({ ctx }) => {
        ctx.leftCol = ctx.search?.[ctx.leftColLabel]

        return !!ctx.leftCol
      },
    },
    {
      description: 'Define the right column of the results row',
      failMsg: "You didn't define the right column of the results row",
      test: ({ ctx }) => {
        ctx.rightCol = ctx.search?.[ctx.rightColLabel]

        return !!ctx.rightCol
      },
    },
    {
      description: 'Use the filter navigator on the left column of the results row',
      failMsg: "You didn't use the `filter-navigator.v3` on the left column of the results row",
      test: ({ ctx }) => {
        const {
          leftCol: { children },
        } = ctx

        return children.includes('filter-navigator.v3')
      },
    },
    {
      description: 'Use the search content on the right column of the results row',
      failMsg: "You didn't use the `search-content` on the right column of the results row",
      test: ({ ctx }) => {
        const {
          rightCol: { children },
        } = ctx

        return children.includes('search-content')
      },
    },
    {
      description: 'Set the width of the left column of the results row',
      failMsg: "There's no prop `width` defined on the left column",
      test: ({ ctx }) => {
        const {
          leftCol: { props },
        } = ctx

        return !!props.width
      },
    },
    {
      description: 'Use gallery and not-found blocks on the search content',
      failMsg: "You didn't use the blocks `gallery` and `not-found` on the `search-content`'s blocks",
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        const EXPECTED_BLOCKS = ['gallery', 'not-found']

        const searchContentBlocks = ctx.search?.['search-content']?.['blocks']

        return difference(EXPECTED_BLOCKS, searchContentBlocks).length === 0
      },
    },
    {
      description: "Use shelf's product summary in the search gallery",
      failMsg: "You didn't use `product-summary.shelf` in the `gallery`'s blocks",
      test: ({ ctx }) => {
          const galleryBlocks = ctx.search?.gallery?.blocks

          return galleryBlocks.includes('product-summary.shelf')
      },
    },
    {
      description: 'Include SKU Selector in all shelves',
      failMsg: "You didn't include `product-summary-sku-selector` in `product-summary.shelf`",
      test: ({ ctx }) => {
          const productSummaryChildren =  ctx.default?.['product-summary.shelf']?.children

          return productSummaryChildren.includes('product-summary-sku-selector')
      },
    },
  ],
} as TestCase
