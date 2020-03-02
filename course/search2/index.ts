import { jsonc } from 'jsonc'
import { difference, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

const BRANCH_NAME = 'search2'

export const search2 = {
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

      stepData.default = jsonc.parse(
        await getFile(
          args.ctx,
          args.installationId,
          args.owner,
          args.repo,
          'store/blocks/default.jsonc',
          BRANCH_NAME
        )
      )
    } catch {
      throw new Error(
        "Didn't manage to load a search.jsonc and a default.jsonc file on your repository :("
      )
    }
  },
  branch: BRANCH_NAME,
  issueNumber: 15,
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
      description:
        'Make the third and fifth element, of your search result desktop layout, rows',
      failMsg:
        'The third and fifth element of your `search-result-layout.desktop` are not rows',
      test: () => {
        try {
          stepData.searchDesktop = prop(
            'search-result-layout.desktop',
            stepData.search
          )

          const { children } = stepData.searchDesktop

          stepData.topRowLabel = children[2]
          stepData.resultsRowLabel = children[4]

          return (
            stepData.topRowLabel.includes('flex-layout.row') &&
            stepData.resultsRowLabel.includes('flex-layout.row')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Top row should have `total-products.v2` and `order-by.v2`',
      failMsg: "The top row doesn't have `total-products.v2` and `order-by.v2`",
      test: () => {
        try {
          stepData.topRow = prop(stepData.topRowLabel, stepData.search)

          const { children: topRowChildren } = stepData.topRow

          return (
            topRowChildren.includes('total-products.v2') &&
            topRowChildren.includes('order-by.v2')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use two columns inside the results row',
      failMsg: "There aren't two columns inside the results row",
      test: () => {
        try {
          stepData.resultsRow = prop(stepData.resultsRowLabel, stepData.search)

          const { children: resultsRowChildren } = stepData.resultsRow

          stepData.leftColLabel = resultsRowChildren[0]
          stepData.rightColLabel = resultsRowChildren[1]

          return (
            stepData.leftColLabel.includes('flex-layout.col') &&
            stepData.rightColLabel.includes('flex-layout.col') &&
            resultsRowChildren.length === 2
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define the left column of the results row',
      failMsg: "You didn't define the left column of the results row",
      test: () => {
        try {
          stepData.leftCol = prop(stepData.leftColLabel, stepData.search)

          return !!stepData.leftCol
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define the right column of the results row',
      failMsg: "You didn't define the right column of the results row",
      test: () => {
        try {
          stepData.rightCol = prop(stepData.rightColLabel, stepData.search)

          return !!stepData.rightCol
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use the filter navigator on the left column of the results row',
      failMsg:
        "You didn't use the `filter-navigator.v3` on the left column of the results row",
      test: () => {
        try {
          const {
            leftCol: { children },
          } = stepData

          return children.includes('filter-navigator.v3')
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use the search content on the right column of the results row',
      failMsg:
        "You didn't use the `search-content` on the right column of the results row",
      test: () => {
        try {
          const {
            rightCol: { children },
          } = stepData

          return children.includes('search-content')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Set the width of the left column of the results row',
      failMsg: "There's no prop `width` defined on the left column",
      test: () => {
        try {
          const {
            leftCol: { props },
          } = stepData

          return !!props.width
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use gallery and not-found blocks on the search content',
      failMsg:
        "You didn't use the blocks `gallery` and `not-found` on the `search-content`'s blocks",
      test: () => {
        try {
          const EXPECTED_BLOCKS = ['gallery', 'not-found']

          const searchContentBlocks = prop(
            'blocks',
            prop('search-content', stepData.search)
          )

          return difference(EXPECTED_BLOCKS, searchContentBlocks).length === 0
        } catch {
          return false
        }
      },
    },
    {
      description: "Use shelf's product summary in the search gallery",
      failMsg:
        "You didn't use `product-summary.shelf` in the `gallery`'s blocks",
      test: () => {
        try {
          const galleryBlocks = prop('blocks', prop('gallery', stepData.search))

          return galleryBlocks.includes('product-summary.shelf')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Include SKU Selector in all shelves',
      failMsg:
        "You didn't include `product-summary-sku-selector` in `product-summary.shelf`",
      test: () => {
        try {
          const productSummaryChildren = prop(
            'children',
            prop('product-summary.shelf', stepData.default)
          )

          return productSummaryChildren.includes('product-summary-sku-selector')
        } catch {
          return false
        }
      },
    },
  ],
}
