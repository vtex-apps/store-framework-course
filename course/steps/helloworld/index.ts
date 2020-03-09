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
        ctx.blocks = parseJsonc(ctx.blocks)
        return !!ctx.blocks
      },
    },
    {
      description: 'Define the rich text in the home block',
      failMsg: "There's no rich text in your home block",
      test: ({ ctx }) => {
        const { ramda: { find } } = ctx
        const richText = find((homeBlock: string) => {
          return homeBlock.includes('rich-text')
        },  ctx.blocks?.['store.home']?.['blocks'])

        return !!richText
      },
    },
    {
      description: 'Make a rich text declaration',
      failMsg: "There's no rich text declaration in your `blocks.jsonc` file",
      test: ({ ctx }) => {
        return !!ctx.blocks['rich-text']
      },
    },
    {
      description: 'Define bold Hello, World!',
      failMsg: 'Your text is not bold',
      test: ({ ctx }) => {
        return /\*\*.+\*/g.test(ctx.blocks?.['rich-text'].props.text)
      },
    },
    {
      description: 'Hello, World! positioned right',
      failMsg: 'Your text is not positioned at right',
      test: ({ ctx }) => {
        return ctx.blocks?.['rich-text']?.props?.textPosition === 'RIGHT'
      },
    },
  ],
} as TestCase
