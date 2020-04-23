const EXPECTED_COMPONENTS = [
  'breadcrumb.search',
  'search-title.v2',
  'total-products.v2',
  'order-by.v2',
  'search-fetch-previous',
  'search-content',
  'filter-navigator.v3',
  'search-fetch-more',
]

export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a search.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.search = await getFile('store/blocks/search.jsonc')
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
      description: 'Use `search-result-layout` on the `store.search`',
      failMsg: "You didn't use `search-result-layout` on the `store.search` blocks",
      test: ({ ctx }) => {
        const {
          'store.search': { blocks: searchBlocks },
        } = ctx.search

        return searchBlocks.includes('search-result-layout')
      },
    },
    {
      description: 'Define `search-result-layout`',
      failMsg: "You didn't define `search-result-layout`",
      test: ({ ctx }) => {
        return Object.keys(ctx.search).includes('search-result-layout')
      },
    },
    {
      description: 'Use `search-result-layout.desktop` on the `search-result-layout`',
      failMsg: "You did't use `search-result-layout.desktop` on the `search-result-layout`",
      test: ({ ctx }) => {
        return ctx.search?.['search-result-layout']?.['blocks'].includes('search-result-layout.desktop')
      },
    },
    {
      description: 'Define `search-result-layout.desktop`',
      failMsg: "You did't define `search-result-layout.desktop`",
      test: ({ ctx }) => {
        ctx.searchDesktop = ctx.search?.['search-result-layout.desktop']
        return !!ctx.searchDesktop
      },
    },
    {
      description: 'Define search components',
      failMsg: `You did't use all of the expected components (${EXPECTED_COMPONENTS.map(
        (elem: string) => `\`${elem}\``
      ).join(', ')})`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        const { children: layoutChildren } = ctx.searchDesktop

        ctx.missingSearchComp = difference(EXPECTED_COMPONENTS, layoutChildren)

        return ctx.missingSearchComp.length === 0
      },
    },
  ],
} as TestCase
