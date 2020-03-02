import { jsonc } from 'jsonc'
import { find, keys, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

export const pdp1 = {
  before: async (args: any) => {
    try {
      stepData.pdp = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/product.jsonc',
        'pdp1'
      )
    } catch {
      throw new Error(
        "Didn't manage to load a product.jsonc file on your repository :("
      )
    }
  },
  branch: 'pdp1',
  issueNumber: 11,
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
      description: 'Crete a product template page',
      failMsg: "You didn't use a `store.product`",
      test: () => {
        try {
          stepData.productBlock = prop('store.product', stepData.blocks)

          return !!stepData.productBlock
        } catch {
          return false
        }
      },
    },
    {
      description: 'Create a main row inside the product page',
      failMsg:
        "You didn't use and define a `flex-layout.row` in your product page",
      test: () => {
        try {
          const used = !!find<string>(
            elem => elem.includes('flex-layout.row'),
            stepData.productBlock.children
          )

          stepData.mainRow = prop(
            find<string>(
              elem => elem.includes('flex-layout.row'),
              keys(stepData.blocks)
            ) as string,
            stepData.blocks
          )

          const defined = !!stepData.mainRow

          return used && defined
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define two columns inside the main row',
      failMsg:
        "There aren't two `flex-layout.col` inside your `flex-layout.row`",
      test: () => {
        try {
          const {
            mainRow: { children },
          } = stepData

          return (
            children.length === 2 &&
            !find((elem: string) => !elem.includes('flex-layout.col'), children)
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define `product-images` on the left column',
      failMsg: "You didn't define `product-images` on the left column",
      test: () => {
        try {
          stepData.leftCol = prop(stepData.mainRow.children[0], stepData.blocks)
          return stepData.leftCol.children[0].includes('product-images')
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Define `product-name`, `product-price` and `buy-button` on the right column',
      failMsg:
        "You didn't define `product-name`, `product-price` and `buy-button` on the right column",
      test: () => {
        try {
          stepData.rightCol = prop(
            stepData.mainRow.children[1],
            stepData.blocks
          )

          const {
            rightCol: { children },
          } = stepData

          return (
            children.includes('product-name') &&
            children.includes('product-price') &&
            children.includes('buy-button')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Control stretch and alignment of right column',
      failMsg:
        "You didn't use the props `preventVerticalStretch` and `verticalAlign`",
      test: () => {
        try {
          const {
            rightCol: { props: rightColProps },
          } = stepData

          return (
            rightColProps.verticalAlign === 'middle' &&
            rightColProps.preventVerticalStretch
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define `product-price` with props',
      failMsg:
        "You didn't define `product-price` or defined the expected props",
      test: () => {
        try {
          const productPriceId = find(
            elem => elem.includes('product-price'),
            keys(stepData.blocks)
          )

          if (!productPriceId) {
            return false
          }

          const { props: productPriceProps } = prop(
            productPriceId,
            stepData.blocks
          )

          return (
            productPriceProps.showSavings && productPriceProps.showListPrice
          )
        } catch {
          return false
        }
      },
    },
  ],
}
