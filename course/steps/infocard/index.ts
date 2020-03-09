export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a home.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.blocks = await getFile('store/blocks/home.jsonc')
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `blocks.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.parsedBlocks = !!parseJsonc(ctx.blocks)
        return ctx.parsedBlocks
      },
    },
    {
      description: 'Define two info cards in the home block',
      failMsg: "Home block doesn't have info-card#button-right or info-card#button-left",
      test: ({ ctx }) => {
        const homeBlock = ctx.parsedBlocks?.['store.home']?.blocks

        return homeBlock.includes('info-card#button-right') && homeBlock.includes('info-card#button-left')
      },
    },
    {
      description: 'Declare info-card#button-right and info-card#button-left',
      failMsg: 'Your `blocks.jsonc` file is missing either info-card#button-right or info-card#button-left',
      test: ({ ctx }) => {
        return !!ctx.parsedBlocks?.['info-card#button-right'] && !!ctx.parsedBlocks?.['info-card#button-left']
      },
    },
    {
      description: 'Define the correct info card properties',
      failMsg: "You didn't use the info-card properties we're expecting",
      test: ({ ctx }) => {
        const infoCardTitle = 'info-card#button-left'
        const infoCardProps = ctx.parsedBlocks?.[infoCardTitle].props

        const hasLink = infoCardProps.callToActionMode === 'link'
        const isTextOnTheLeft = infoCardProps.textPosition === 'left'
        const isCorrectImage =
          infoCardProps.imageUrl === 'https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png'
        const isCorrectTitle = infoCardProps.headline === 'Shining chrome'

        return hasLink && isTextOnTheLeft && isCorrectImage && isCorrectTitle
      },
    },
  ],
} as TestCase
