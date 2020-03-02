import { jsonc } from 'jsonc'
import { difference, keys, equals } from 'ramda'

import { getFile } from '../../../utils'

const headerFull = 'header.full'
const headerLayoutDesktop = 'header-layout.desktop'
const headerLayoutMobile = 'header-layout.mobile'
const richTextHeader = 'rich-text#header'
const mobileSearchRowHeader = 'header-row#search'
const mainDesktopRowHeader = 'header-row#main'
const mainMobileRowHeader = 'header-row#main-mobile'
const notificationRowHeader = 'header-row#notification'

const searchSvg = `<g id="hpa-search">   \n <path fill="currentColor" d="M4,13H1c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h3V13z"></path> \n <path fill="currentColor" d="M15,3H1C0.448,3,0,2.552,0,2v0c0-0.552,0.448-1,1-1h14c0.552,0,1,0.448,1,1v0C16,2.552,15.552,3,15,3z"></path> \n <path fill="currentColor" d="M4,8H1C0.448,8,0,7.552,0,7v0c0-0.552,0.448-1,1-1h3V8z"></path> \n <path fill="currentColor" d="M15.707,13.293l-2.274-2.274C13.785,10.424,14,9.74,14,9c0-2.206-1.794-4-4-4S6,6.794,6,9 s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l2.274,2.274L15.707,13.293z M10,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S11.103,11,10,11z"></path> \n </g>`

const cartSvg = `<g id="hpa-cart"> \n     <path fill="currentColor" d="M15,6h-1.4l-2.7-5.4C10.6,0.1,10-0.1,9.6,0.1C9.1,0.4,8.9,1,9.1,1.4L11.4,6H4.6l2.3-4.6 c0.2-0.5,0-1.1-0.4-1.3C6-0.1,5.4,0.1,5.1,0.6L2.4,6H1c-1.1,0-1.1,1-0.9,1.4l3,8C3.2,15.7,3.6,16,4,16h8c0.4,0,0.8-0.3,0.9-0.6l3-8 C16.1,7,16,6,15,6z"></path> \n </g>`

const desktopHeaderChildren = ['header-row#notification', 'header-row#main']

const mobileHeaderChildren = [
  'header-row#notification',
  'header-row#main-mobile',
  'header-row#search',
]

const notificationRowChildren = [
  'header-spacer',
  'rich-text#header',
  'header-spacer',
]

const mainDesktopRow = {
  children: ['logo', 'header-spacer', 'search-bar', 'minicart', 'login'],
  props: {
    sticky: true,
    inverted: true,
    fullWidth: false,
  },
}

const mainMobileRow = {
  children: ['logo', 'header-spacer', 'minicart', 'login'],
  props: {
    sticky: true,
    inverted: true,
  },
}

const rowSearch = {
  children: ['search-bar'],
  props: {
    sticky: true,
  },
}

const login = {
  props: {
    showIconProfile: true,
    iconLabel: 'Login',
  },
}

const logo = {
  props: {
    url:
      'https://appliancetheme.vteximg.com.br/assets/vtex.file-manager-graphql/images/flatflat___6081e50402943bcb11bc45a8e613aa72.png',
  },
}

const richText = {
  props: {
    text: "**Free Shipping on orders over $50**",
    textPosition: "CENTER"
  },
}

const stepData: any = {}

export const header = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.blocks = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/header.jsonc',
        'header'
      )
      stepData.iconPack = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'styles/iconpacks/iconpack.svg',
        'header'
      )
    } catch {
      throw new Error("Couldn't find `header.jsonc` or `inconpack.svg` files.")
    }
  },
  branch: 'header',
  issueNumber: 22,
  tests: [
    {
      description: 'First test - Code compilation',
      failMsg:
        "There's something wrong with the format of your `header.jsonc` file",
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
        'Your store must contain header full and header layouts desktop and mobile',
      failMsg: `You havent declared ${[
        headerFull,
        headerLayoutDesktop,
        headerLayoutMobile,
      ].join(', ')} on you store`,
      test: () => {
        try {
          const templateContainsLayouts =
            difference(
              [headerFull, headerLayoutDesktop, headerLayoutMobile],
              keys(stepData.jsonBlocks)
            ).length === 0
          const layoutsAreCorrectlyDeclared =
            difference(
              [headerLayoutDesktop, headerLayoutMobile],
              stepData.jsonBlocks[headerFull].blocks
            ).length === 0

          return layoutsAreCorrectlyDeclared && templateContainsLayouts
        } catch {
          return false
        }
      },
    },

    {
      description: "Desktop's header rows must be correctly stated",
      failMsg: `You haven\'t stated ${desktopHeaderChildren.join(
        ', '
      )} correctly inside ${headerLayoutDesktop}. Review their names, positioning and parent block.`,
      test: () => {
        try {
          const firstRow =
            stepData.jsonBlocks[headerLayoutDesktop].children[0] ===
            desktopHeaderChildren[0]
          const secondRow =
            stepData.jsonBlocks[headerLayoutDesktop].children[1] ===
            desktopHeaderChildren[1]

          return firstRow && secondRow
        } catch {
          return false
        }
      },
    },

    {
      description: "Mobile's header rows must be correctly stated",
      failMsg: `You haven\'t stated ${mobileHeaderChildren.join(
        ', '
      )} correctly inside ${headerLayoutMobile}. Review their names, positioning and parent block.`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[headerLayoutMobile].children,
            mobileHeaderChildren
          )
        } catch {
          return false
        }
      },
    },

    {
      description: "Your store must contain Desktop's Header Rows",
      failMsg: `You haven\'t declared ${desktopHeaderChildren.join(
        ', '
      )} on you store`,
      test: () => {
        try {
          return (
            difference(desktopHeaderChildren, keys(stepData.jsonBlocks))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },

    {
      description: "Your store must contain Mobile's Header Rows",
      failMsg: `You haven\'t declared ${mobileHeaderChildren.join(
        ', '
      )} on you store`,
      test: () => {
        try {
          return (
            difference(mobileHeaderChildren, keys(stepData.jsonBlocks))
              .length === 0
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Your store must contain login, logo and rich-text',
      failMsg: `You haven\'t declared login, logo and ${richTextHeader}  on you store`,
      test: () => {
        try {
          return (
            difference(
              ['login', 'logo', richTextHeader],
              keys(stepData.jsonBlocks)
            ).length === 0
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Your store must contain correct login props',
      failMsg: `You haven\'t declared login's props ${keys(login.props).join(
        ', '
      )} properly`,
      test: () => {
        try {
          return equals(stepData.jsonBlocks.login, login)
        } catch {
          return false
        }
      },
    },

    {
      description: 'Your store must contain correct logo props',
      failMsg: `You haven\'t declared logo's props ${keys(logo.props).join(
        ', '
      )} properly`,
      test: () => {
        try {
          return equals(stepData.jsonBlocks.logo, logo)
        } catch {
          return false
        }
      },
    },

    {
      description: 'Your store must contain correct rich-text props',
      failMsg: `You haven\'t declared rich-text props ${keys(
        richText.props
      ).join(', ')} properly`,
      test: () => {
        try {
          return equals(stepData.jsonBlocks[richTextHeader], richText)
        } catch {
          return false
        }
      },
    },

    {
      description:
        'Your store must contain the correct Search row on mobile mode',
      failMsg: `You haven\'t declared the row ${mobileSearchRowHeader} props and children properly`,
      test: () => {
        try {
          return equals(stepData.jsonBlocks[mobileSearchRowHeader], rowSearch)
        } catch {
          return false
        }
      },
    },

    {
      description:
        'Your store must contain the correct main row on mobile mode',
      failMsg: `You haven\'t declared the row ${mainMobileRowHeader} props and children properly`,
      test: () => {
        try {
          return equals(stepData.jsonBlocks[mainMobileRowHeader], mainMobileRow)
        } catch {
          return false
        }
      },
    },

    {
      description:
        'Your store must contain the correct main row on desktop mode',
      failMsg: `You haven\'t declared the row ${mainDesktopRowHeader} props and children properly`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[mainDesktopRowHeader],
            mainDesktopRow
          )
        } catch {
          return false
        }
      },
    },

    {
      description:
        'Your store must contain the correct main row on desktop mode',
      failMsg: `You haven\'t declared the row ${notificationRowHeader} children properly`,
      test: () => {
        try {
          return equals(
            stepData.jsonBlocks[notificationRowHeader].children,
            notificationRowChildren
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Search SVG should be correctly placed on iconpack',
      failMsg: `You haven\'t replaced the Search SVG correctly on iconpack.svg file`,
      test: () => {
        try {
          const trimmedIconpack = stepData.iconPack
            .replace(/\t/g, '')
            .replace(/\n/g, '')
            .replace(/ /g, '')
          const trimmedSearchSvg = searchSvg
            .replace(/\t/g, '')
            .replace(/\n/g, '')
            .replace(/ /g, '')

          return trimmedIconpack.includes(trimmedSearchSvg)
        } catch {
          return false
        }
      },
    },

    {
      description: 'Cart SVG should be correctly placed on iconpack',
      failMsg: `You haven\'t replaced the Cart SVG correctly on iconpack.svg file`,
      test: () => {
        try {
          const trimmedIconpack = stepData.iconPack
            .replace(/\t/g, '')
            .replace(/\n/g, '')
            .replace(/ /g, '')
          const trimmedCartSvg = cartSvg
            .replace(/\t/g, '')
            .replace(/\n/g, '')
            .replace(/ /g, '')

          return trimmedIconpack.includes(trimmedCartSvg)
        } catch {
          return false
        }
      },
    },
  ],
}
