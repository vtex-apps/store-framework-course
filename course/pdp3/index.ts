import { jsonc } from 'jsonc'
import { find, keys, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

export const pdp3 = {
  before: async (args: any) => {
    try {
      stepData.pdp = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/product.jsonc',
        'pdp3'
      )
    } catch {
      throw new Error(
        "Didn't manage to load a product.jsonc file on your repository :("
      )
    }
  },
  branch: 'pdp3',
  issueNumber: 13,
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
      description: 'Define related products shelf',
      failMsg:
        "You didn't define a `shelf.relatedProducts` in the end of the `store.product` template",
      test: () => {
        try {
          stepData.productBlock = prop('store.product', stepData.blocks)

          const {
            productBlock: { children },
          } = stepData

          return children[2].includes('shelf.relatedProducts')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Use and define a `stack-layout` on the left column',
      failMsg: "You didn't use and define a `stack-layout` on the left column",
      test: () => {
        try {
          const stackLayoutId = find(
            (block: string) => block.includes('stack-layout'),
            keys(stepData.blocks)
          ) as string

          stepData.stackLayout = prop(stackLayoutId, stepData.blocks)

          const {
            productBlock: { children: productChildren },
          } = stepData

          const mainRowId = productChildren[1]

          const mainRow = prop(mainRowId, stepData.blocks)

          const leftCol = prop(mainRow.children[0], stepData.blocks)

          return stackLayoutId && leftCol.children.includes(stackLayoutId)
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Use product images and product brand within the stack layout',
      failMsg:
        "You didn't use a `product-images` and a `product-brand` in your `stack-layout` on the left column",
      test: () => {
        try {
          const {
            stackLayout: { children },
          } = stepData

          return (
            children[0].includes('product-images') &&
            children[1].includes('product-brand')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define correct props on `product-brand`',
      failMsg: "You didn't define the props correctly on `product-brand`",
      test: () => {
        try {
          const productBrandId = find(
            (block: string) => block.includes('product-brand'),
            keys(stepData.blocks)
          ) as string

          const { props: productBrandProps } = prop(
            productBrandId,
            stepData.blocks
          )

          return !!productBrandProps.height

        } catch {
          return false
        }
      },
    },
    {
      description: 'Define correct props on `sku-selector`',
      failMsg: "You didn't define the props correctly on `sku-selector`",
      test: () => {
        try {
          const skuSelectorId = find(
            (block: string) => block.includes('sku-selector'),
            keys(stepData.blocks)
          ) as string

          const { props: skuSelectorProps } = prop(
            skuSelectorId,
            stepData.blocks
          )

          return Boolean(
            skuSelectorProps.initialSelection === 'empty' &&
            skuSelectorProps.showValueNameForImageVariation &&
            skuSelectorProps.showVariationsErrorMessage
          )
        } catch {
          return false
        }
      },
    },
  ],
}
