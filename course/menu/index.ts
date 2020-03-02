import { jsonc } from 'jsonc'
import { equals, last } from 'ramda'

import { getFile } from '../../../utils'

const submenuMajorTitle = 'vtex.menu@2.x:submenu#major'
const submenuSmallTitle = 'vtex.menu@2.x:submenu#small'
const submenuElectronicsTitle = 'vtex.menu@2.x:submenu#electronics'

const menuItemMajorTitle = 'menu-item#major-appliances'
const menuItemSmallTitle = 'menu-item#small-appliances'
const menuItemElectronicsTitle = 'menu-item#electronics'

const mainMenuTitle = 'vtex.menu@2.x:menu#categories'
const majorMenuTitle = 'vtex.menu@2.x:menu#major'
const smallMenuTitle = 'vtex.menu@2.x:menu#small'
const electronicsMenuTitle = 'vtex.menu@2.x:menu#electronics'

const headerTitle = 'header-layout.desktop'
const menuRowTitle = 'header-row#menu'

const headerMobileTitle = 'header-row#main-mobile'
const drawerTitle = 'drawer'

const menuRowChildren = [
  'header-spacer',
  'vtex.menu@2.x:menu#categories',
  'header-spacer',
]

const mainMenu = {
  children: [
    'menu-item#major-appliances',
    'menu-item#small-appliances',
    'menu-item#electronics',
  ],
  props: {
    orientation: 'horizontal',
  },
}

const majorMenu = {
  children: ['menu-item#refrigerators', 'menu-item#ovens', 'menu-item#washers'],
  props: {
    orientation: 'vertical',
  },
}
const smallMenu = {
  children: ['menu-item#mixers', 'menu-item#toasters', 'menu-item#coffee'],
  props: {
    orientation: 'vertical',
  },
}

const electronicsMenu = {
  children: ['menu-item#cameras', 'menu-item#laptops', 'menu-item#tvs'],
  props: {
    orientation: 'vertical',
  },
}

const stepData: any = {}

export const menu = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.menuItems = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/menu-items.jsonc',
        'menu'
      )

      stepData.menu = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/menu.jsonc',
        'menu'
      )

      stepData.header = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/header.jsonc',
        'menu'
      )
    } catch {
      throw new Error(
        "Couldn't find `menu.jsonc`,`menu-items.jsonc`, `header.jsonc` files."
      )
    }
  },
  branch: 'menu',
  issueNumber: 23,

  tests: [
    {
      description: 'Code compilation:  header.jsonc',
      failMsg:
        "There's something wrong with the format of your `header.jsonc` file",
      test: () => {
        try {
          stepData.jsonHeader = jsonc.parse(stepData.header)
          return !!stepData.jsonHeader
        } catch {
          return false
        }
      },
    },

    {
      description: 'Code compilation:  menu-items.jsonc',
      failMsg:
        "There's something wrong with the format of your `menu-items.jsonc` file",
      test: () => {
        try {
          stepData.jsonMenuItems = jsonc.parse(stepData.menuItems)
          return !!stepData.jsonMenuItems
        } catch {
          return false
        }
      },
    },

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
      description: 'Major Appliances Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuMajorTitle} on your ${menuItemMajorTitle}`,
      test: () => {
        try {
          return stepData.jsonMenuItems[menuItemMajorTitle].blocks.includes(
            submenuMajorTitle
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Small Appliances Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuSmallTitle} on your ${menuItemSmallTitle}`,
      test: () => {
        try {
          return stepData.jsonMenuItems[menuItemSmallTitle].blocks.includes(
            submenuSmallTitle
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Electronics Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuElectronicsTitle} on your ${menuItemElectronicsTitle}`,
      test: () => {
        try {
          return stepData.jsonMenuItems[
            menuItemElectronicsTitle
          ].blocks.includes(submenuElectronicsTitle)
        } catch {
          return false
        }
      },
    },

    {
      description: 'Main Category Menu must be stated',
      failMsg: `You havent declared ${mainMenuTitle} on your menu.jsonc file`,
      test: () => {
        try {
          return !!stepData.jsonMenu[mainMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Main Category Menu must have correct children',
      failMsg: `You havent declared the children ${mainMenu.children.join(
        ', '
      )} on ${mainMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[mainMenuTitle].children,
            mainMenu.children
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Main Category Menu must be on horizontal orientation',
      failMsg: `You havent declared props "orientation" as "horizontal" on ${mainMenuTitle}`,
      test: () => {
        try {
          return equals(stepData.jsonMenu[mainMenuTitle].props, mainMenu.props)
        } catch {
          return false
        }
      },
    },

    {
      description: 'Major Appliances Menu must be stated',
      failMsg: `You havent declared ${majorMenuTitle} on your menu.jsonc file`,
      test: () => {
        try {
          return !!stepData.jsonMenu[majorMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Major Appliances must have correct children',
      failMsg: `You havent declared the children ${majorMenu.children.join(
        ', '
      )} on ${majorMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[majorMenuTitle].children,
            majorMenu.children
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Major Appliances Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${majorMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[majorMenuTitle].props,
            majorMenu.props
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Small Appliances Menu must be stated',
      failMsg: `You havent declared ${smallMenuTitle} on your menu.jsonc file`,
      test: () => {
        try {
          return !!stepData.jsonMenu[smallMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Small Appliances must have correct children',
      failMsg: `You havent declared the children ${smallMenu.children.join(
        ', '
      )} on ${smallMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[smallMenuTitle].children,
            smallMenu.children
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Small Appliances Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${smallMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[smallMenuTitle].props,
            smallMenu.props
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Electronics Menu must be stated',
      failMsg: `You havent declared ${electronicsMenuTitle} on your menu.jsonc file`,
      test: () => {
        try {
          return !!stepData.jsonMenu[electronicsMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Electronics Menu must have correct children',
      failMsg: `You havent declared the children ${electronicsMenu.children.join(
        ', '
      )} on ${electronicsMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[electronicsMenuTitle].children,
            electronicsMenu.children
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Electronics Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${electronicsMenuTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonMenu[electronicsMenuTitle].props,
            electronicsMenu.props
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Menu row must be placed as last child of header',
      failMsg: `You havent declared ${menuRowTitle} as last child of ${headerTitle}`,
      test: () => {
        try {
          return (
            last(stepData.jsonHeader[headerTitle].children) === menuRowTitle
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Drawer must be placed as first child of header mobile',
      failMsg: `You havent declared ${drawerTitle} as first child of ${headerMobileTitle}`,
      test: () => {
        try {
          return (
            stepData.jsonHeader[headerMobileTitle].children[0] == drawerTitle
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Menu row must have correct children',
      failMsg: `You havent declared ${menuRowChildren.join(
        ', '
      )} as children of ${menuRowTitle}`,
      test: () => {
        try {
          return equals(
            stepData.jsonHeader[menuRowTitle].children,
            menuRowChildren
          )
        } catch {
          return false
        }
      },
    },

    {
      description: 'Major Submenu must have major menu as children',
      failMsg: `You havent declared ${majorMenuTitle} as children of ${submenuMajorTitle}`,
      test: () => {
        try {
          return equals(stepData.jsonMenu[submenuMajorTitle].children, [
            majorMenuTitle,
          ])
        } catch {
          return false
        }
      },
    },

    {
      description: 'Small Submenu must have small menu as children',
      failMsg: `You havent declared ${smallMenuTitle} as children of ${submenuSmallTitle}`,
      test: () => {
        try {
          return equals(stepData.jsonMenu[submenuSmallTitle].children, [
            smallMenuTitle,
          ])
        } catch {
          return false
        }
      },
    },

    {
      description: 'Electronics Submenu must have electronics menu as children',
      failMsg: `You havent declared ${electronicsMenuTitle} as children of ${submenuElectronicsTitle}`,
      test: () => {
        try {
          return equals(stepData.jsonMenu[submenuElectronicsTitle].children, [
            electronicsMenuTitle,
          ])
        } catch {
          return false
        }
      },
    },
  ],
}
