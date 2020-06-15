const gabaritoImgCss = {
  '.infoCardContainer': {
    maxWidth: /1260(\s+)?px/,
    margin: /0(\s+)?(px)?(\s+)auto/,
    padding: /0(\s+)?(px)?/,
  },
}

const vintageImgCss = {
  '.infoCardContainer--vintage': {
    backgroundColor: '#edcfd1',
  },
}

const vintageClass = '.infoCardContainer--vintage'

const metalImgCss = {
  '.infoCardContainer--metal': {
    backgroundColor: '#e1e1e1',
  },
}

const metalClass = '.infoCardContainer--metal'

const imgCssClass = '.infoCardContainer'

const gabaritoTxtCss = {
  '.infoCardHeadline': {
    fontFamily: 'serif',
    fontSize: /2.25\s?r?em/,
    fontWeight: /bold|700/,
    color: /black|#([[fF]{3}|[[fF]{6})$/,
    border: /2\s?px solid (black|#([[fF]{3}|[[fF]{6}))$/,
    padding: /24\s?px/,
  },
}
const txtCssClass = '.infoCardHeadline'

const gabaritoButtonHover = {
  '.infoCardCallActionContainer :global(.vtex-button):hover': {
    backgroundColor: /white|#(0{3}|0{6})$/,
    border: 'transparent',
    color: /gray|#([[cC]{3}|[[cC]{6})$/,
  },
}

const buttonHoverClass = '.infoCardCallActionContainer :global(.vtex-button):hover'

const gabaritoButton = {
  '.infoCardCallActionContainer :global(.vtex-button)': {
    color: /white|#(f{3}|f{6})$/,
    backgroundColor: /gray|#([[cC]{3}|[[cC]{6})$/,
    border: 'transparent',
  },
}

const buttonClass = '.infoCardCallActionContainer :global(.vtex-button)'

const testPairs = (gabarito: any, userValue: any, caseSensitive: boolean = true) => {
  return !gabarito.find((curr: any) => {
    if (!caseSensitive && typeof curr === 'string') {
      curr = curr.toLowerCase()
    }

    const regex = RegExp(curr[1])
    const stepValue = userValue.find(([key]: Array<any>) => key === curr[0])[1]

    return !regex.test(stepValue)
  })
}

export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Couldn't find the correct css file on your styles folder. Check your css file's name.",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.css = await getFile('styles/css/vtex.store-components.css')
        return !!ctx.css
      },
    },
    {
      description: 'First test - Code compilation',
      failMsg: "There's something wrong with the format of your `vtex.store-components.css` file",
      test: ({ ctx }) => {
        const {
          ramda: { is },
          parseCss,
        } = ctx
        ctx.parsedCss = parseCss(ctx.css)
        return !!is(String, ctx.css) && !!is(Object, ctx.parsedCss)
      },
    },
    {
      description: 'Check Css Classes - Image',
      failMsg: `You haven't declared ${Object.keys(gabaritoImgCss).join(', ')} classes for the image`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(gabaritoImgCss), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attributes - Image',
      failMsg: `You haven't declared the attributes correctly for the image - ${imgCssClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return (
          difference(Object.keys(gabaritoImgCss[imgCssClass]), Object.keys(ctx.parsedCss[imgCssClass])).length === 0
        )
      },
    },
    {
      description: 'Check Css Attributes values - Image',
      failMsg: `You haven't declared the attributes values correctly for the image - ${imgCssClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(toPairs(gabaritoImgCss[imgCssClass]), toPairs(ctx.parsedCss[imgCssClass]), false)
      },
    },
    {
      description: 'Check Css Classes - Text',
      failMsg: `You haven't declared ${Object.keys(gabaritoTxtCss).join(', ')} classes for the text`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(gabaritoTxtCss), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attributes - Text',
      failMsg: `You haven't declared the attributes correctly for the text - ${txtCssClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return (
          difference(Object.keys(gabaritoTxtCss[txtCssClass]), Object.keys(ctx.parsedCss[txtCssClass])).length === 0
        )
      },
    },
    {
      description: 'Check Css Attributes values - Text',
      failMsg: `You haven't declared the attributes values correctly for the text - ${txtCssClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(toPairs(gabaritoTxtCss[txtCssClass]), toPairs(ctx.parsedCss[txtCssClass]), false)
      },
    },

    {
      description: 'Check Css Classes - Button',
      failMsg: `You haven't declared ${Object.keys(gabaritoButton).join(', ')} classes for the button`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(gabaritoButton), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attributes - Button',
      failMsg: `You haven\'t declared the correct css attributes for the button - ${buttonClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return (
          difference(Object.keys(gabaritoButton[buttonClass]), Object.keys(ctx.parsedCss[buttonClass])).length === 0
        )
      },
    },

    {
      description: 'Check Css Classes and Metal blockClass',
      failMsg: `You haven\'t declared ${metalImgCss} classes and blockClass`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(metalImgCss), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attribute Values - Metal blockclass',
      failMsg: `You haven\'t declared the correct css attributes values for the Metal infocard - ${metalClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(toPairs(metalImgCss[metalClass]), toPairs(ctx.parsedCss[metalClass]), false)
      },
    },

    {
      description: 'Check Css Classes and Vintage blockClass',
      failMsg: `You haven't declared ${Object.keys(vintageImgCss).join(', ')} classes for the Vintage infocard`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(vintageImgCss), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attribute Values - Vintage',
      failMsg: `You haven't declared the correct css attributes for the Vintage Infocard - ${vintageClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(toPairs(vintageImgCss[vintageClass]), toPairs(ctx.parsedCss[vintageClass]), false)
      },
    },
    {
      description: 'Check Css Attributes values - Button',
      failMsg: `You haven't declared the correct css attributes values for ${buttonClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(toPairs(gabaritoButton[buttonClass]), toPairs(ctx.parsedCss[buttonClass]), false)
      },
    },

    {
      description: 'Check Css Classes - Button Hover',
      failMsg: `You haven't declared ${Object.keys(gabaritoButtonHover).join(', ')} classes for the button hover`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return difference(Object.keys(gabaritoButtonHover), Object.keys(ctx.parsedCss)).length === 0
      },
    },
    {
      description: 'Check Css Attributes - Button Hover',
      failMsg: `You haven\'t declared the correct css attributes for the button hover - ${buttonHoverClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { difference },
        } = ctx
        return (
          difference(Object.keys(gabaritoButtonHover[buttonHoverClass]), Object.keys(ctx.parsedCss[buttonHoverClass]))
            .length === 0
        )
      },
    },
    {
      description: 'Check Css Attributes values - Button Hover',
      failMsg: `You haven't declared the attributes values correctly for the button hover - ${buttonHoverClass}`,
      test: ({ ctx }) => {
        const {
          ramda: { toPairs },
        } = ctx
        return testPairs(
          toPairs(gabaritoButtonHover[buttonHoverClass]),
          toPairs(ctx.parsedCss[buttonHoverClass]),
          false
        )
      },
    },
  ],
} as TestCase
