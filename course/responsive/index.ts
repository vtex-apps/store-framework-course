import { jsonc } from 'jsonc'
import { difference, keys, equals } from 'ramda'

import { getFile } from '../../../utils'

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
  src:
    'https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Desktop.jpg?q=1',
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
  src:
    'https://appliancetheme.vteximg.com.br/arquivos/Responsive-Image-Mobile.jpg?q=1',
}
const stepData: any = {}

export const responsiveimage = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.blocks = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/home.jsonc',
        'responsiveimage'
      )
    } catch {
      throw new Error("Couldn't find `home.jsonc` file.")
    }
  },
  branch: 'responsiveimage',
  issueNumber: 10,
  tests: [
    {
      description: 'First test - Code compilation',
      failMsg:
        "There's something wrong with the format of your `home.jsonc` file",
      test: () => {
        try {
          stepData.jsonBlocks = jsonc.parse(stepData.blocks)
          return !!stepData.jsonBlocks
        } catch {
          return false
        }
      },
    },

    {
      description:
        'store.home must contain responsive layouts mobile and desktop',
      failMsg: `You havent declared ${responsiveLayouts.join(
        ','
      )} on you store.home`,
      test: () => {
        try {
          const templateContainsLayouts =
            difference(responsiveLayouts, keys(stepData.jsonBlocks)).length ===
            0
          const layoutsAreCorrectlyDeclared =
            difference(
              responsiveLayouts,
              stepData.jsonBlocks['store.home'].blocks
            ).length === 0

          return layoutsAreCorrectlyDeclared && templateContainsLayouts
        } catch {
          return false
        }
      },
    },

    {
      description: "Desktop's image and rich text must be correctly stated",
      failMsg: `You haven\'t stated ${richTextDesktop} and ${imageDesktop} correctly inside ${responsiveDesktop}. Review their names, positioning and parent block.`,
      test: () => {
        try {
          const childrenAreCorrect = equals(
            stepData.jsonBlocks[responsiveDesktop].children,
            [richTextDesktop, imageDesktop]
          )
          const templateContainsComponents =
            difference(
              [richTextDesktop, imageDesktop],
              keys(stepData.jsonBlocks)
            ).length === 0

          return childrenAreCorrect && templateContainsComponents
        } catch {
          return false
        }
      },
    },
    {
      description: "Mobile's image and rich text must be correctly stated",
      failMsg: `You haven\'t stated ${richTextMobile} and ${imageMobile} correctly inside ${responsiveMobile}. Review their names, positioning and parent block.`,
      test: () => {
        try {
          const childrenAreCorrect = equals(
            stepData.jsonBlocks[responsiveMobile].children,
            [richTextMobile, imageMobile]
          )
          const templateContainsComponents =
            difference([richTextMobile, imageMobile], keys(stepData.jsonBlocks))
              .length === 0

          return childrenAreCorrect && templateContainsComponents
        } catch {
          return false
        }
      },
    },

    {
      description: 'Rich-text Mobile props must be correclty declared',
      failMsg: `You haven\'t declared the props ${keys(
        richTextMobileProps
      ).join(
        ','
      )} from ${richTextMobile} correctly. Review their names and values.`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[richTextMobile].props,
            richTextMobileProps
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Rich-text Desktop props must be correclty declared',
      failMsg: `You haven\'t declared the props ${keys(
        richTextDesktopProps
      ).join(
        ','
      )} from ${richTextDesktop} correctly. Review their names and values.`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[richTextDesktop].props,
            richTextDesktopProps
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Image Mobile props must be correclty declared',
      failMsg: `You haven\'t declared the props ${keys(imageMobileProps).join(
        ','
      )} from ${imageMobile} correctly. Review their names and values.`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[imageMobile].props,
            imageMobileProps
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Image Desktop props must be correclty declared',
      failMsg: `You haven\'t declared the props ${keys(imageDesktopProps).join(
        ','
      )} from ${imageDesktop} correctly. Review their names and values.`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[imageDesktop].props,
            imageDesktopProps
          )
        } catch {
          return false
        }
      },
    },
  ],
}
