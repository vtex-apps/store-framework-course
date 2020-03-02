import { jsonc } from 'jsonc'
import { find, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

export const pdp2 = {
  before: async (args: any) => {
    try {
      stepData.pdp = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/product.jsonc',
        'pdp2'
      )
    } catch {
      throw new Error(
        "Didn't manage to load a product.jsonc file on your repository :("
      )
    }
  },
  branch: 'pdp2',
  issueNumber: 12,
  tests: [
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `product.jsonc` file",
      test: () => {
        try {
          stepData.blocks = jsonc.parse(stepData.pdp)
          return !!stepData.blocks
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use a breadcrumb',
      failMsg: "You didn't declare a `breadcrumb`",
      test: () => {
        try {
          stepData.productBlock = prop('store.product', stepData.blocks)

          return !!stepData.productBlock.children[0].includes('breadcrumb')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Used a product identifier',
      failMsg: "You didn't use a `product-identifier.product`",
      test: () => {
        try {
          const {
            productBlock: { children: productChildren },
          } = stepData

          const mainRowId = productChildren[1]

          stepData.mainRow = prop(mainRowId, stepData.blocks)

          stepData.rightCol = prop(
            stepData.mainRow.children[1],
            stepData.blocks
          )

          const {
            rightCol: { children: rightColChildren },
          } = stepData

          return !!rightColChildren[1].includes('product-identifier.product')
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Create a row inside the right col with quantity and sku selectors',
      failMsg:
        "You didn't use and define a `flex-layout.row` in the right col with `sku-selector` and `product-quantity`",
      test: () => {
        try {
          const {
            rightCol: { children: rightColChildren },
          } = stepData

          const { children: rowChildren } = prop(
            find(
              (elem: string) => elem.includes('flex-layout.row'),
              rightColChildren
            ) as string,
            stepData.blocks
          )

          return (
            rowChildren.includes('sku-selector') &&
            rowChildren.includes('product-quantity') &&
            rowChildren.length === 2
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define a shipping simulator in the right column',
      failMsg: "There isn't a `shipping-simulator` on the right column",
      test: () => {
        try {
          const {
            rightCol: { children: rightColChildren },
          } = stepData

          return rightColChildren.includes('shipping-simulator')
        } catch {
          return false
        }
      },
    },
  ],
}
