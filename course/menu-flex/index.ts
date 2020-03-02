import { jsonc } from 'jsonc'
import { keys, equals } from 'ramda'

import { getFile } from '../../../utils'

const submenuMajorTitle = 'vtex.menu@2.x:submenu#major'
const majorMenuTitle = 'vtex.menu@2.x:menu#major'

const flexRowTitle = 'flex-layout.row#major'
const flexColMenu = 'flex-layout.col#menu'
const flexColImg = 'flex-layout.col#img'

const imageTitle = 'image#menu'
const richTextTitle = 'rich-text#header'

const imgColProps = {
  paddingRight: 4,
  horizontalAlign: 'right',
}

const imgProps = {
  src: 'https://appliancetheme.vteximg.com.br/arquivos/menu-washer.jpg',
  link: { url: '/small-appliances/coffee-makers' },
  alt: 'Coffee Makers Collection',
  maxWidth: '200px',
}

const stepData: any = {}

export const menuflex = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.menu = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/menu.jsonc',
        'menuflex'
      )

      stepData.menuFlex = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/menu-flex.jsonc',
        'menuflex'
      )
    } catch {
      throw new Error("Couldn't find `menu.jsonc`, `menu-flex.jsonc` files.")
    }
  },
  branch: 'menuflex',
  issueNumber: 24,

  tests: [
    {
      description: 'Code compilation: menu.jsonc',
      failMsg:
        "There's something wrong with the format of your `menu.jsonc` file",
      test: () => {
        try {
          stepData.jsonMenu = jsonc.parse(stepData.menu)
          return !!stepData.jsonMenu
        } catch {
          return false
        }
      },
    },

    {
      description: 'Code compilation: menu-flex.jsonc',
      failMsg:
        "There's something wrong with the format of your `menu-flex.jsonc` file",
      test: () => {
        try {
          stepData.jsonMenuFlex = jsonc.parse(stepData.menuFlex)
          return !!stepData.jsonMenuFlex
        } catch {
          return false
        }
      },
    },

    // {
    //   description: 'menu.jsonc must not contain major appliances submenu',
    //   failMsg: `You  must not declare ${submenuMajorTitle} on your menu.jsonc file`,
    //   test: () => {
    //     try {
    //       return !stepData.jsonMenu[submenuMajorTitle]
    //     } catch {
    //       return false
    //     }
    //   },
    // },

    {
      description:
        'Major appliances submenu must contain a flex-layout row as children',
      failMsg: `You  must declare ${flexRowTitle} as children of ${submenuMajorTitle}`,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[submenuMajorTitle].children, [
            flexRowTitle,
          ])
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout row must be correctly stated',
      failMsg: `You must declare ${flexRowTitle} on menu-flex.jsonc`,
      test: () => {
        try {
          return !!stepData.jsonMenuFlex[flexRowTitle]
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout row must contain two cols as children',
      failMsg: `${flexRowTitle} must have ${flexColMenu}, ${flexColImg} as children `,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[flexRowTitle].children, [
            flexColMenu,
            flexColImg,
          ])
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout columns must be correctly stated',
      failMsg: `You must declare ${flexColMenu}, ${flexColImg} on menu-flex.jsonc`,
      test: () => {
        try {
          return (
            !!stepData.jsonMenuFlex[flexColMenu] &&
            !!stepData.jsonMenuFlex[flexColImg]
          )
        } catch {
          return false
        }
      },
    },

    {
      description:
        'flex-layout colum must contain major appliances menu as children',
      failMsg: `${flexColMenu} must have no props and ${majorMenuTitle} as children`,
      test: () => {
        try {
          const majorMenuAsChildren = equals(
            stepData.jsonMenuFlex[flexColMenu].children,
            [majorMenuTitle]
          )

          return (
            !stepData.jsonMenuFlex[flexColMenu].props && majorMenuAsChildren
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'flex-layout colum must contain image and rich-text as children',
      failMsg: `${flexColImg} must have  ${imageTitle} and ${richTextTitle} as children`,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[flexColImg].children, [
            imageTitle,
            richTextTitle,
          ])
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout colum must contain correct props',
      failMsg: `${flexColImg} must have  ${keys(imgColProps).join(
        ', '
      )} as children`,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[flexColImg].props, imgColProps)
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout colum must contain correct props',
      failMsg: `${flexColImg} must have  ${keys(imgColProps).join(
        ', '
      )} as children`,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[flexColImg].props, imgColProps)
        } catch {
          return false
        }
      },
    },

    {
      description: 'image component must be correctly stated',
      failMsg: `You must declare ${imageTitle} on menu-flex.jsonc`,
      test: () => {
        try {
          return !!stepData.jsonMenuFlex[imageTitle]
        } catch {
          return false
        }
      },
    },

    {
      description: 'image component must contain correct props',
      failMsg: `You must declare ${keys(imgProps).join(
        ', '
      )} on ${imageTitle}. Check their names and values.`,
      test: () => {
        try {
          return equals(stepData.jsonMenuFlex[imageTitle].props, imgProps)
        } catch {
          return false
        }
      },
    },
  ],
}
