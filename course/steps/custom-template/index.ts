export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: `Didn't manage to load a about-us.jsonc file on your repository :(`,
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const getFileResult = await getFile('store/blocks/about-us.jsonc')
        ctx.blocksFileContent = parseJsonc(getFileResult)
        ctx.compareObjects = function compareObjects(
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

        return true
      },
    },
    {
      description: 'Declare a `store.custom#about-us` template in your about-us.jsonc file',
      failMsg: 'Could not find a store.custom#about-us declaration',
      test: ({ ctx }) => {
        const storeCustomTemplate: string[] = ctx.blocksFileContent['store.custom#about-us']
        return Boolean(storeCustomTemplate)
      },
    },
    {
      description: 'Add a `flex-layout.row#about-us` to your template',
      failMsg: 'Could not find a `flex-layout.row#about-us` block inside your template',
      test: ({ ctx }) => {
        const storeCustomTemplateBlocks: string[] = ctx.blocksFileContent['store.custom#about-us']['blocks']

        return Boolean(storeCustomTemplateBlocks.filter(block => Boolean(block.match(/flex-layout.row/))).length >= 1)
      },
    },
    {
      description: 'Use the sample code provided in the instructions for this step to complete the layout',
      failMsg: 'Your code did not match the sample one provided in the instructions for this step',
      test: ({ ctx }) => {
        const { compareObjects } = ctx
        const ANSWER_OBJECT = {
          'store.custom#about-us': {
            blocks: ['flex-layout.row#about-us'],
          },
          'flex-layout.row#about-us': {
            children: ['image#about-us', 'flex-layout.col#text-about-us'],
          },
          'flex-layout.col#text-about-us': {
            children: ['rich-text#about-title', 'rich-text#about-content'],
            props: {
              preventVerticalStretch: true,
            },
          },
          'rich-text#about-title': {
            props: {
              text: '# Sobre a FlatFlat',
            },
          },
          'rich-text#about-content': {
            props: {
              text:
                ' FlatFlat é uma loja de eletro eletrônicos com muita tradição na fabricação de itens modernos e vintage. Nosso objetivo é criar eletrodomésticos que tornem as casas dos nossos clientes interessantes, independente do estilo. Com apenas 2 meses de história, já somos a loja com os produtos mais bonitos de toda a VTEX. Estamos construindo o nosso site nesse momento com o intuito de dar ao nosso cliente uma experiência memorável com a nossa marca!',
            },
          },
          'image#about-us': {
            props: {
              src: 'https://appliancetheme.vteximg.com.br/arquivos/cozinha-about-us.png',
              maxHeight: '600px',
            },
          },
        }

        return compareObjects(ctx.blocksFileContent, ANSWER_OBJECT)
      },
    },
    {
      description:
        'Create a routes.jsonc file and declare a `/about-us` path and check your workspace at {workspace}--appliancetheme.myvtex.com/about-us to see the new page :)',
      failMsg: 'Could not find a `/about-us` path declaration',
      test: async ({ ctx }) => {
        const { getFile, parseJsonc, compareObjects } = ctx
        const ANSWER_OBJECT = {
          'store.custom#about-us': {
            path: '/about-us',
          },
        }
        const getFileResult = await getFile('store/routes.json')
        const parsedFileContent = parseJsonc(getFileResult)

        return compareObjects(parsedFileContent, ANSWER_OBJECT)
      },
    },
  ],
} as TestCase
