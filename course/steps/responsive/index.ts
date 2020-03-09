const responsiveDesktop = 'responsive-layout.desktop#desktop'
const responsiveMobile = 'responsive-layout.mobile#mobile'
const richTextDesktop = 'rich-text#desktop'
const imageDesktop = 'image#desktop'
const richTextMobile = 'rich-text#mobile'
const imageMobile = 'image#mobile'

const responsiveLayouts = [responsiveDesktop, responsiveMobile]

const richTextDesktopProps = {
  text: '# Your Coffee, Your Way \n ### New Coffee Makers Collection',
  textPosition: 'CENTER',
  textAlignment: 'CENTER',
}

const richTextMobileProps = {
  text: '### Your Coffee, Your Way \n #### New Coffee Makers Collection',
  textPosition: 'CENTER',
  textAlignment: 'CENTER',
}

const imageDesktopProps = {
  src: 'https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1',
  link: {
    url: '/small-appliances/coffee-makers',
  },
  alt: 'Coffee Makers Collection',
  maxWidth: '100%',
}

const imageMobileProps = {
  alt: 'Coffee Makers Collection',
  link: {
    url: '/small-appliances/coffee-makers',
  },
  maxWidth: '100%',
  src: 'https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1',
}

export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Couldn't find `home.jsonc` file.",
      test: async ({ ctx, ctx: { getFile } }) => {
        ctx.blocks = await getFile('store/blocks/home.jsonc')
      },
    },
    {
      description: 'First test - Code compilation',
      failMsg: "There's something wrong with the format of your `home.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.jsonBlocks = parseJsonc(ctx.blocks)
        return !!ctx.jsonBlocks
      },
    },

    {
      description: 'store.home must contain responsive layouts mobile and desktop',
      failMsg: `You havent declared ${responsiveLayouts.join(',')} on you store.home`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        const templateContainsLayouts = difference(responsiveLayouts, Object.keys(ctx.jsonBlocks)).length === 0
        const layoutsAreCorrectlyDeclared =
          difference(responsiveLayouts, ctx.jsonBlocks['store.home'].blocks).length === 0

        return layoutsAreCorrectlyDeclared && templateContainsLayouts
      },
    },

    {
      description: "Desktop's image and rich text must be correctly stated",
      failMsg: `You haven\'t stated ${richTextDesktop} and ${imageDesktop} correctly inside ${responsiveDesktop}. Review their names, positioning and parent block.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals, difference },
        } = ctx
        const childrenAreCorrect = equals(ctx.jsonBlocks[responsiveDesktop].children, [richTextDesktop, imageDesktop])
        const templateContainsComponents =
          difference([richTextDesktop, imageDesktop], Object.keys(ctx.jsonBlocks)).length === 0

        return childrenAreCorrect && templateContainsComponents
      },
    },
    {
      description: "Mobile's image and rich text must be correctly stated",
      failMsg: `You haven\'t stated ${richTextMobile} and ${imageMobile} correctly inside ${responsiveMobile}. Review their names, positioning and parent block.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals, difference },
        } = ctx
        const childrenAreCorrect = equals(ctx.jsonBlocks[responsiveMobile].children, [richTextMobile, imageMobile])
        const templateContainsComponents =
          difference([richTextMobile, imageMobile], Object.keys(ctx.jsonBlocks)).length === 0

        return childrenAreCorrect && templateContainsComponents
      },
    },

    {
      description: 'Rich-text Mobile props must be correclty declared',
      failMsg: `You haven\'t declared the props ${Object.keys(richTextMobileProps).join(
        ','
      )} from ${richTextMobile} correctly. Review their names and values.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonBlocks[richTextMobile].props, richTextMobileProps)
      },
    },

    {
      description: 'Rich-text Desktop props must be correclty declared',
      failMsg: `You haven\'t declared the props ${Object.keys(richTextDesktopProps).join(
        ','
      )} from ${richTextDesktop} correctly. Review their names and values.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonBlocks[richTextDesktop].props, richTextDesktopProps)
      },
    },

    {
      description: 'Image Mobile props must be correclty declared',
      failMsg: `You haven\'t declared the props ${Object.keys(imageMobileProps).join(
        ','
      )} from ${imageMobile} correctly. Review their names and values.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonBlocks[imageMobile].props, imageMobileProps)
      },
    },

    {
      description: 'Image Desktop props must be correclty declared',
      failMsg: `You haven\'t declared the props ${Object.keys(imageDesktopProps).join(
        ','
      )} from ${imageDesktop} correctly. Review their names and values.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonBlocks[imageDesktop].props, imageDesktopProps)
      },
    },
  ],
} as TestCase
