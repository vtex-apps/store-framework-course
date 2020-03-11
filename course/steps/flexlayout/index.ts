export default {
  tests: [
    {
      description: 'Getting file',
      failMsg: "Didn't manage to load a home.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const getFileResult = await getFile('store/blocks/home.jsonc')
        ctx.blocksFileContent = parseJsonc(getFileResult)
        return !!ctx.blocksFileContent
      },
    },
    {
      description: 'Rich-text should not be rendered by `flex-layout.row`',
      failMsg: 'Your `flex-layout.row` still has a `rich-text` among its children.',
      test: ({ ctx }) => {
        const homeBlocks: string[] = ctx.blocksFileContent['flex-layout.row']['children']

        return homeBlocks.filter(block => Boolean(block.match(/rich-text/))).length === 0
      },
    },
    {
      description: 'Add a `flex-layout.col` inside of `flex-layout.row`',
      failMsg: 'Could not find `flex-layout.col` inside of `flex-layout.row`',
      test: ({ ctx }) => {
        const flexLayoutRowChildren: string[] = ctx.blocksFileContent['flex-layout.row']['children']

        return flexLayoutRowChildren.filter(block => Boolean(block.match(/flex-layout.col/))).length > 0
      },
    },
    {
      description: 'Define two images as children of flex-layout.col with the correct props for each image',
      failMsg: 'Could not find both image blocks declared as children of `flex-layout.col`',
      test: ({ ctx }) => {
        const ELECTRONICS_IMAGE_SRC =
          'https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/electronics_banner___25d69b49f8224b369375e68513b4d593.png'
        const MAJOR_APPLIANCE_IMAGE_SRC =
          'https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/major_appliance_banner___bb10093866a127345ddfbcca3efa5022.png'

        const firstImageProps: Record<string, string> = ctx.blocksFileContent['image#electronics']['props']
        const secondImageProps: Record<string, string> = ctx.blocksFileContent['image#major-appliance']['props']

        const firstImageTestResult = Boolean(firstImageProps.src && firstImageProps.src === ELECTRONICS_IMAGE_SRC)
        const secondImageTestResult = Boolean(
          secondImageProps.src && secondImageProps.src === MAJOR_APPLIANCE_IMAGE_SRC
        )

        const flexLayoutColChildren: string[] = ctx.blocksFileContent['flex-layout.col']['children']

        const flexLayoutColTestResult =
          flexLayoutColChildren.includes('image#electronics') && flexLayoutColChildren.includes('image#major-appliance')

        return firstImageTestResult && secondImageTestResult && flexLayoutColTestResult
      },
    },
  ],
} as TestCase
