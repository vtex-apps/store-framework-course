export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a about-us.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { parseJsonc, getFile } = ctx
        const getFileResult = await getFile('richtextmarkdown')
        ctx.blocksFileContent = parseJsonc(getFileResult)
      },
    },
    {
      description: 'Update the label of `tab-list.item#home1`',
      failMsg: 'Your `tab-list.item#home1` block does not have the correct label text',
      test: ({ ctx }) => {
        const tabListItem1LabelProp: string = ctx.blocksFileContent['tab-list.item#home1']['props']['label']

        return tabListItem1LabelProp === 'Sobre'
      },
    },
    {
      description: 'Update the text content of the `rich-text` block associated with `tab-list.item#home1`',
      failMsg:
        'The text content of the `rich-text` block associated with `tab-list.item#home1` does not match the expected format',
      test: ({ ctx }) => {
        const richTextTextProp: string = ctx.blocksFileContent['rich-text#home1']['props']['text']

        return Boolean(richTextTextProp.match(/## /))
      },
    },
    {
      description: 'Make the title and subtitle and the markdown text bold',
      failMsg:
        'The text content of the `rich-text` block associated with `tab-list.item#home1` does not match the expected format',
      test: ({ ctx }) => {
        const richTextTextProp: string = ctx.blocksFileContent['rich-text#home1']['props']['text']

        const bold1 = !!richTextTextProp.match(/# ?\*\* ?Nossa/)
        const bold2 = !!richTextTextProp.match(/da VTEX! ?\*\*/)

        return bold1 && bold2
      },
    },
  ],
} as TestCase
