import * as postcss from 'postcss'
import postcssJs from 'postcss-js'
import { difference, is, keys, toPairs } from 'ramda'

import { getFile, testPairs } from '../../../utils'

const gabaritoImgCss = {
  '.infoCardContainer': {
    maxWidth: /1260(\s+)?px/,
    margin: /0(\s+)?(px)?(\s+)auto/,
    padding: /0(\s+)?(px)?/,
  },
}

const vintageImgCss = {
  '.infoCardContainer--vintage': {
    backgroundColor: '#EDCFD1',
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

const buttonHoverClass =
  '.infoCardCallActionContainer :global(.vtex-button):hover'

const gabaritoButton = {
  '.infoCardCallActionContainer :global(.vtex-button)': {
    color: /white|#(f{3}|f{6})$/,
    backgroundColor: /gray|#([[cC]{3}|[[cC]{6})$/,
    border: 'transparent',
  },
}

const buttonClass = '.infoCardCallActionContainer :global(.vtex-button)'

const stepData: any = {}

export const csshandles = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.css = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'styles/css/vtex.store-components.css',
        'csshandles'
      )
    } catch {
      throw new Error(
        "Couldn't find the correct css file on your styles folder. Check your css file's name."
      )
    }
  },
  branch: 'csshandles',
  issueNumber: 6,
  tests: [
    {
      description: 'First test - Code compilation',
      failMsg:
        "There's something wrong with the format of your `vtex.store-components.css` file",
      test: () => {
        try {
          const root = postcss.parse(stepData.css)
          stepData.parsedCss = postcssJs.objectify(root)
          return !!is(String, stepData.css) && !!is(Object, stepData.parsedCss)
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Classes - Image',
      failMsg: `You haven't declared ${keys(gabaritoImgCss).join(
        ', '
      )} classes for the image`,
      test: () => {
        try {
          return (
            difference(keys(gabaritoImgCss), keys(stepData.parsedCss))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes - Image',
      failMsg: `You haven't declared the attributes correctly for the image - ${imgCssClass}`,
      test: () => {
        try {
          return (
            difference(
              keys(gabaritoImgCss[imgCssClass]),
              keys(stepData.parsedCss[imgCssClass])
            ).length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes values - Image',
      failMsg: `You haven't declared the attributes values correctly for the image - ${imgCssClass}`,
      test: () => {
        try {
          return testPairs(
              toPairs(gabaritoImgCss[imgCssClass]),
              toPairs(stepData.parsedCss[imgCssClass]),
              false,
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Classes - Text',
      failMsg: `You haven't declared ${keys(gabaritoTxtCss).join(
        ', '
      )} classes for the text`,
      test: () => {
        try {
          return (
            difference(keys(gabaritoTxtCss), keys(stepData.parsedCss))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes - Text',
      failMsg: `You haven't declared the attributes correctly for the text - ${txtCssClass}`,
      test: () => {
        try {
          return (
            difference(
              keys(gabaritoTxtCss[txtCssClass]),
              keys(stepData.parsedCss[txtCssClass])
            ).length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes values - Text',
      failMsg: `You haven't declared the attributes values correctly for the text - ${txtCssClass}`,
      test: () => {
        try {
          return testPairs(
              toPairs(gabaritoTxtCss[txtCssClass]),
              toPairs(stepData.parsedCss[txtCssClass]),
              false
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Check Css Classes - Button',
      failMsg: `You haven't declared ${keys(gabaritoButton).join(
        ', '
      )} classes for the button`,
      test: () => {
        try {
          return (
            difference(keys(gabaritoButton), keys(stepData.parsedCss))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes - Button',
      failMsg: `You haven\'t declared the correct css attributes for the button - ${buttonClass}`,
      test: () => {
        try {
          return (
            difference(
              keys(gabaritoButton[buttonClass]),
              keys(stepData.parsedCss[buttonClass])
            ).length === 0
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Check Css Classes and Metal blockClass',
      failMsg: `You haven\'t declared ${metalImgCss} classes and blockClass`,
      test: () => {
        try {
          return (
            difference(keys(metalImgCss), keys(stepData.parsedCss)).length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attribute Values - Metal blockclass',
      failMsg: `You haven\'t declared the correct css attributes values for the Metal infocard - ${metalClass}`,
      test: () => {
        try {
          return testPairs(
              toPairs(metalImgCss[metalClass]),
              toPairs(stepData.parsedCss[metalClass]),
              false
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Check Css Classes and Vintage blockClass',
      failMsg: `You haven't declared ${keys(vintageImgCss).join(
        ', '
      )} classes for the Vintage infocard`,
      test: () => {
        try {
          return (
            difference(keys(vintageImgCss), keys(stepData.parsedCss)).length ===
            0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attribute Values - Vintage',
      failMsg: `You haven't declared the correct css attributes for the Vintage Infocard - ${vintageClass}`,
      test: () => {
        try {
          return testPairs(
            toPairs(vintageImgCss[vintageClass]),
            toPairs(stepData.parsedCss[vintageClass]),
            false
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes values - Button',
      failMsg: `You haven't declared the correct css attributes values for ${buttonClass}`,
      test: () => {
        try {
          return testPairs(
            toPairs(gabaritoButton[buttonClass]),
            toPairs(stepData.parsedCss[buttonClass]),
            false
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Check Css Classes - Button Hover',
      failMsg: `You haven't declared ${keys(gabaritoButtonHover).join(
        ', '
      )} classes for the button hover`,
      test: () => {
        try {
          return (
            difference(keys(gabaritoButtonHover), keys(stepData.parsedCss))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes - Button Hover',
      failMsg: `You haven\'t declared the correct css attributes for the button hover - ${buttonHoverClass}`,
      test: () => {
        try {
          return (
            difference(
              keys(gabaritoButtonHover[buttonHoverClass]),
              keys(stepData.parsedCss[buttonHoverClass])
            ).length === 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Check Css Attributes values - Button Hover',
      failMsg: `You haven't declared the attributes values correctly for the button hover - ${buttonHoverClass}`,
      test: () => {
        try {
          return testPairs(
            toPairs(gabaritoButtonHover[buttonHoverClass]),
            toPairs(stepData.parsedCss[buttonHoverClass]),
            false
          )
        } catch {
          return false
        }
      },
    },
  ],
}
