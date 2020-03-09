export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a home.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { parseJsonc, getFile } = ctx
        const getFileResult = await getFile('store/blocks/home.jsonc')
        ctx.blocksFileContent = parseJsonc(getFileResult)
      },
    },
    {
      description: 'Add a shelf to `store.home` blocks',
      failMsg: 'Could not find a shelf listed as a block in store.home',
      test: ({ ctx }) => {
        const homeBlocks: string[] = ctx.blocksFileContent['store.home']['blocks']
        return homeBlocks.filter(block => Boolean(block.match(/shelf/))).length === 1
      },
    },
    {
      description: 'Create a shelf.jsonc file',
      failMsg: 'Could not find a shelf.jsonc file',
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const fileResult = await getFile('store/blocks/shelf.jsonc')
        ctx.shelf = parseJsonc(fileResult)
        return Boolean(fileResult)
      },
    },
    {
      description: "Add the declarations found at this module's text to shelf.jsonc",
      failMsg: "Your shelf.jsonc file content did not match the one from this module's text",
      test: async ({ ctx }) => {
        function compareObjects(
          obj1: Record<any, any>,
          obj2: Record<any, any>,
          configs: CompareConfigs = { caseSensitive: true }
        ) {
          //Loop through properties in object 1
          for (const p in obj1) {
            //Check property exists on both objects
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false

            switch (typeof obj1[p]) {
              //Deep compare objects
              case 'object':
                if (!compareObjects(obj1[p], obj2[p])) return false
                break
              //Compare function code
              case 'function':
                if (typeof obj2[p] == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString()))
                  return false
                break
              case 'string':
                return configs.caseSensitive ? obj1[p] == obj2[p] : obj1[p].toLowerCase() == obj2[p].toLowerCase()
              //Compare values
              default:
                return obj1[p] == obj2[p]
            }
          }

          return true
        }

        interface CompareConfigs {
          caseSensitive: boolean
        }

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

        return compareObjects(ctx.shelf, ANSWER_OBJECT)
      },
    },
    {
      description: 'Update maximum number of products displayed by the Shelf to 8',
      failMsg: 'The maximum number of products displayed by your Shelf differs from 8',
      test: async ({ ctx }) => {
        const maxItemsValue = ctx.shelf['shelf']['props']['productList']['maxItems']
        return maxItemsValue === 8
      },
    },
    {
      description: 'Update number of products per page to 4',
      failMsg: 'The number of products per page differs from 4',
      test: async ({ ctx }) => {
        const maxItemsValue = ctx.shelf['shelf']['props']['productList']['itemsPerPage']
        return maxItemsValue === 4
      },
    },
  ],
} as TestCase
