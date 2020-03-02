import { prop, find, keys } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

const BRANCH_NAME = 'searchlanding'

const EXPECTED_PROPS = [
  'orderByField',
  'hideUnavailableItems',
  'maxItemsPerPage',
  'queryField',
  'mapField',
]

export const searchlanding = {
  before: async (args: any) => {
    try {
      stepData.search = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/search-landing.jsonc',
        BRANCH_NAME
      )

      stepData.routes = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/routes.json',
        BRANCH_NAME
      )
    } catch {
      throw new Error(
        "Didn't manage to load a searchlanding.json or routes.json file on your repository :("
      )
    }
  },
  branch: BRANCH_NAME,
  issueNumber: 21,
  tests: [
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `searchlanding.json` file",
      test: () => {
        try {
          stepData.search = JSON.parse(stepData.search)
          stepData.routes = JSON.parse(stepData.routes)
          return !!stepData.search && !!stepData.routes
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define a new route',
      failMsg:
        "You didn't define the `store.custom#landing` route and its `path`",
      test: () => {
        try {
          const landingRoute = stepData.routes['store.custom#landing']
          return Boolean(!!landingRoute && landingRoute.path)
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define a `store.custom` block',
      failMsg: "You didn't define a `store.custom` block",
      test: () => {
        try {
          const customLabel = find(
            (block: string) => block.includes('store.custom#'),
            keys(stepData.search)
          )

          if (!customLabel) return false

          stepData.landing = prop(customLabel, stepData.search)

          return true
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use `image` block on the `store.custom` blocks and define the banner',
      failMsg:
        "You didn't use `image` block on the `store.custom` blocks and define it with a `src` and `minWidth` of 100%",
      test: () => {
        try {
          const used = !!find(
            (block: string) => block.includes('image'),
            keys(stepData.search)
          )

          const image = prop(
            find(
              (block: string) => block.includes('image'),
              stepData.landing.blocks
            ) as string,
            stepData.search
          )

          return (
            used &&
            !!image &&
            image.props.minWidth === '100%' &&
            !!image.props.src
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use `search-result-layout.customQuery` block on the `store.custom` blocks and define it',
      failMsg:
        "You didn't use a `search-result-layout.customQuery` block on the `store.custom` blocks and defined it",
      test: () => {
        try {
          const used = !!find(
            (block: string) =>
              block.includes('search-result-layout.customQuery'),
            keys(stepData.search)
          )

          stepData.customQueryBlock = prop(
            find(
              (block: string) =>
                block.includes('search-result-layout.customQuery'),
              stepData.landing.blocks
            ) as string,
            stepData.search
          )

          return used && !!stepData.customQueryBlock
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define the customQuery props',
      failMsg:
        "You didn't define all the expected `search-result-layout.customQuery` props",
      test: () => {
        try {
          const {
            props: { querySchema },
          } = stepData.customQueryBlock

          return (
            !!querySchema &&
            !find(
              (prop: string) => !querySchema.hasOwnProperty(prop),
              EXPECTED_PROPS
            )
          )
        } catch {
          return false
        }
      },
    },
  ],
}
