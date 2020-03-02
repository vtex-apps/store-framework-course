import { jsonc } from 'jsonc'

import { compareObjects } from '../../../resources/object-compare'
import { getFile } from '../../../utils'

let blocksFileContent: Record<string, any>

export const shelf = {
  before: async (args: any) => {
    try {
      const getFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/home.jsonc',
        'shelf'
      )
      blocksFileContent = jsonc.parse(getFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a home.jsonc file on your repository :("
      )
    }
  },
  branch: 'shelf',
  issueNumber: 8,
  tests: [
    {
      description: 'Add a shelf to `store.home` blocks',
      failMsg: 'Could not find a shelf listed as a block in store.home',
      test: () => {
        try {
          const homeBlocks: string[] = blocksFileContent['store.home']['blocks']

          return (
            homeBlocks.filter(block => Boolean(block.match(/shelf/))).length ===
            1
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Create a shelf.jsonc file',
      failMsg: 'Could not find a shelf.jsonc file',
      test: async (args: any) => {
        try {
          const getFileResult = await getFile(
            args.ctx,
            args.installationId,
            args.owner,
            args.repo,
            'store/blocks/shelf.jsonc',
            'shelf'
          )

          return Boolean(getFileResult)
        } catch {
          return false
        }
      },
    },
    {
      description:
        "Add the declarations found at this module's text to shelf.jsonc",
      failMsg:
        "Your shelf.jsonc file content did not match the one from this module's text",
      test: async (args: any) => {
        try {
          const ANSWER_OBJECT = {
            shelf: {
              blocks: ['product-summary.shelf'],
              props: {
                category: 1,
                orderBy: 'OrderByTopSaleDESC',
                paginationDotsVisibility: 'desktopOnly',
                productList: {
                  maxItems: 10,
                  itemsPerPage: 5,
                  minItemsPerPage: 1,
                  scroll: 'BY_PAGE',
                  arrows: true,
                  titleText: 'Top sellers',
                },
              },
            },
            'product-summary.shelf': {
              children: [
                'product-summary-image',
                'product-summary-add-to-list-button',
                'product-summary-name',
                'product-rating-inline',
                'product-summary-space',
                'product-summary-price',
                'product-identifier.summary',
                'product-summary-buy-button',
              ],
            },
          }

          const getFileResult = await getFile(
            args.ctx,
            args.installationId,
            args.owner,
            args.repo,
            'store/blocks/shelf.jsonc',
            'shelf'
          )
          const parsedFileContent = jsonc.parse(getFileResult)

          return compareObjects(parsedFileContent, ANSWER_OBJECT)
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Update maximum number of products displayed by the Shelf to 8',
      failMsg:
        'The maximum number of products displayed by your Shelf differs from 8',
      test: async (args: any) => {
        try {
          const getFileResult = await getFile(
            args.ctx,
            args.installationId,
            args.owner,
            args.repo,
            'store/blocks/shelf.jsonc',
            'shelf'
          )
          const parsedFileContent = jsonc.parse(getFileResult)
          const maxItemsValue =
            parsedFileContent['shelf']['props']['productList']['maxItems']

          return maxItemsValue === 8
        } catch {
          return false
        }
      },
    },
    {
      description: 'Update number of products per page to 4',
      failMsg: 'The number of products per page differs from 4',
      test: async (args: any) => {
        try {
          const getFileResult = await getFile(
            args.ctx,
            args.installationId,
            args.owner,
            args.repo,
            'store/blocks/shelf.jsonc',
            'shelf'
          )
          const parsedFileContent = jsonc.parse(getFileResult)
          const maxItemsValue =
            parsedFileContent['shelf']['props']['productList']['itemsPerPage']

          return maxItemsValue === 4
        } catch {
          return false
        }
      },
    },
  ],
}
