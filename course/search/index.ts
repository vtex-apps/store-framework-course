import { jsonc } from 'jsonc'
import { difference, keys, map, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

const BRANCH_NAME = 'search'

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

export const search = {
  before: async (args: any) => {
    try {
      stepData.search = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/search.jsonc',
        BRANCH_NAME
      )
    } catch {
      throw new Error(
        "Didn't manage to load a search.jsonc file on your repository :("
      )
    }
  },
  branch: BRANCH_NAME,
  issueNumber: 14,
  tests: [
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `search.jsonc` file",
      test: () => {
        try {
          stepData.search = jsonc.parse(stepData.search)
          return !!stepData.search
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use `search-result-layout` on the `store.search`',
      failMsg:
        "You didn't use `search-result-layout` on the `store.search` blocks",
      test: () => {
        try {
          const {
            'store.search': { blocks: searchBlocks },
          } = stepData.search

          return searchBlocks.includes('search-result-layout')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define `search-result-layout`',
      failMsg: "You didn't define `search-result-layout`",
      test: () => {
        try {
          return keys(stepData.search).includes('search-result-layout')
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use `search-result-layout.desktop` on the `search-result-layout`',
      failMsg:
        "You did't use `search-result-layout.desktop` on the `search-result-layout`",
      test: () => {
        try {
          return prop(
            'blocks',
            prop('search-result-layout', stepData.search)
          ).includes('search-result-layout.desktop')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define `search-result-layout.desktop`',
      failMsg: "You did't define `search-result-layout.desktop`",
      test: () => {
        try {
          stepData.searchDesktop = prop(
            'search-result-layout.desktop',
            stepData.search
          )
          return !!stepData.searchDesktop
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define search components',
      failMsg: `You did't use all of the expected components (${map(
        (elem: string) => `\`${elem}\``,
        EXPECTED_COMPONENTS
      ).join(', ')})`,
      test: () => {
        try {
          const { children: layoutChildren } = stepData.searchDesktop

          stepData.missingSearchComp = difference(
            EXPECTED_COMPONENTS,
            layoutChildren
          )

          return stepData.missingSearchComp.length === 0
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use the correct layout props',
      failMsg:
        "You did't use `pagination` and `preventRouteChange` on `search-result-layout.desktop`'s props",
      test: () => {
        try {
          const { props } = stepData.searchDesktop

          return props.pagination
        } catch {
          return false
        }
      },
    },
  ],
}
