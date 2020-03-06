export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a about-us.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const getFileResult = await getFile('store/blocks/about-us.jsonc')
        ctx.blocksFileContent = parseJsonc(getFileResult)
      },
    },
    {
      description: 'Update the label from the `tab-list.item#home2` to Instagram',
      failMsg: '`tab-list.item#home2` does not have the expected label',
      test: ({ ctx }) => {
        const tabListItem2Label: string = ctx.blocksFileContent['tab-list.item#home2']['props']['label']

        return tabListItem2Label === 'Instagram'
      },
    },
    {
      description: 'Add an `iframe` to the tab labeled "Instagram"',
      failMsg: 'Could not find an `iframe` block inside your "Instagram" tab',
      test: ({ ctx }) => {
        const tabContentItem2Children: string[] = ctx.blocksFileContent['tab-content.item#home2']['children']

        return tabContentItem2Children.includes('iframe')
      },
    },
    {
      description: 'Configure your iframe to show an Instagram post',
      failMsg: 'Your iframe is not configured according to the instructions for this step',
      test: ({ ctx }) => {
        const iframe = ctx.blocksFileContent['iframe']

        return (
          iframe.props.src === 'https://www.instagram.com/p/B37Zfd6FobU/embed' &&
          iframe.props.width === 800 &&
          iframe.props.height === 1000
        )
      },
    },
  ],
} as TestCase
