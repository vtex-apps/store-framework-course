const EXPECTED_PROPS = ['orderByField', 'hideUnavailableItems', 'maxItemsPerPage', 'queryField', 'mapField']

export default {
  tests: [
    {
      description: 'Getting the files',
      failMsg: "Didn't manage to load a searchlanding.json or routes.json file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.search = await getFile('store/blocks/search-landing.jsonc')
        ctx.routes = await getFile('store/routes.json')
        return true
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `searchlanding.json` file",
      test: ({ ctx }) => {
        ctx.search = JSON.parse(ctx.search)
        ctx.routes = JSON.parse(ctx.routes)
        return !!ctx.search && !!ctx.routes
      },
    },
    {
      description: 'Define a new route',
      failMsg: "You didn't define the `store.custom#landing` route and its `path`",
      test: ({ ctx }) => {
        const landingRoute = ctx.routes['store.custom#landing']
        return Boolean(!!landingRoute && landingRoute.path)
      },
    },
    {
      description: 'Define a `store.custom` block',
      failMsg: "You didn't define a `store.custom` block",
      test: ({ ctx }) => {
        const {
          ramda: { find },
        } = ctx
        const customLabel = find((block: string) => block.includes('store.custom#'), Object.keys(ctx.search))

        if (!customLabel) return false

        ctx.landing = ctx.search?.[customLabel]

        return true
      },
    },
    {
      description: 'Use `image` block on the `store.custom` blocks and define the banner',
      failMsg:
        "You didn't use `image` block on the `store.custom` blocks and define it with a `src` and `minWidth` of 100%",
      test: ({ ctx }) => {
        const {
          ramda: { find },
        } = ctx
        const used = !!find((block: string) => block.includes('image'), Object.keys(ctx.search))

        const image = ctx.search[find((block: string) => block.includes('image'), ctx.landing.blocks) as string]

        return used && !!image && image.props.minWidth === '100%' && !!image.props.src
      },
    },
    {
      description: 'Use `search-result-layout.customQuery` block on the `store.custom` blocks and define it',
      failMsg: "You didn't use a `search-result-layout.customQuery` block on the `store.custom` blocks and defined it",
      test: ({ ctx }) => {
        const {
          ramda: { find },
        } = ctx
        const used = !!find(
          (block: string) => block.includes('search-result-layout.customQuery'),
          Object.keys(ctx.search)
        )

        ctx.customQueryBlock =
          ctx.search[find((block: string) => block.includes('search-result-layout.customQuery'), ctx.landing.blocks) as string]

        return used && !!ctx.customQueryBlock
      },
    },
    {
      description: 'Define the customQuery props',
      failMsg: "You didn't define all the expected `search-result-layout.customQuery` props",
      test: ({ ctx }) => {
        const {
          props: { querySchema },
        } = ctx.customQueryBlock

        const {
          ramda: { find },
        } = ctx
        return !!querySchema && !find((prop: string) => !querySchema.hasOwnProperty(prop), EXPECTED_PROPS)
      },
    },
  ],
} as TestCase
