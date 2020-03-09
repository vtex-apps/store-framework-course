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

const menuRowChildren = ['header-spacer', 'vtex.menu@2.x:menu#categories', 'header-spacer']

const mainMenu = {
  children: ['menu-item#major-appliances', 'menu-item#small-appliances', 'menu-item#electronics'],
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

export const menu = {
  tests: [
    {
      description: 'Fetching files',
      failMsg: "Couldn't find `menu.jsonc`,`menu-items.jsonc`, `header.jsonc` files.",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.menuItems = await getFile('store/blocks/menu-items.jsonc')
        ctx.menu = await getFile('store/blocks/menu.jsonc')
        ctx.header = await getFile('store/blocks/header.jsonc')
      },
    },
    {
      description: 'Code compilation:  header.jsonc',
      failMsg: "There's something wrong with the format of your `header.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.jsonHeader = parseJsonc(ctx.header)
        return !!ctx.jsonHeader
      },
    },

    {
      description: 'Code compilation:  menu-items.jsonc',
      failMsg: "There's something wrong with the format of your `menu-items.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.jsonMenuItems = parseJsonc(ctx.menuItems)
        return !!ctx.jsonMenuItems
      },
    },

    {
      description: 'Code compilation: menu.jsonc',
      failMsg: "There's something wrong with the format of your `menu.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.jsonMenu = parseJsonc(ctx.menu)
        return !!ctx.jsonMenu
      },
    },

    {
      description: 'Major Appliances Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuMajorTitle} on your ${menuItemMajorTitle}`,
      test: ({ ctx }) => {
        return ctx.jsonMenuItems[menuItemMajorTitle].blocks.includes(submenuMajorTitle)
      },
    },
    {
      description: 'Small Appliances Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuSmallTitle} on your ${menuItemSmallTitle}`,
      test: ({ ctx }) => {
        return ctx.jsonMenuItems[menuItemSmallTitle].blocks.includes(submenuSmallTitle)
      },
    },
    {
      description: 'Electronics Menu item must contain correct submenu',
      failMsg: `You havent declared ${submenuElectronicsTitle} on your ${menuItemElectronicsTitle}`,
      test: ({ ctx }) => {
        return ctx.jsonMenuItems[menuItemElectronicsTitle].blocks.includes(submenuElectronicsTitle)
      },
    },

    {
      description: 'Main Category Menu must be stated',
      failMsg: `You havent declared ${mainMenuTitle} on your menu.jsonc file`,
      test: ({ ctx }) => {
        return !!ctx.jsonMenu[mainMenuTitle]
      },
    },
    {
      description: 'Main Category Menu must have correct children',
      failMsg: `You havent declared the children ${mainMenu.children.join(', ')} on ${mainMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[mainMenuTitle].children, mainMenu.children)
      },
    },
    {
      description: 'Main Category Menu must be on horizontal orientation',
      failMsg: `You havent declared props "orientation" as "horizontal" on ${mainMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[mainMenuTitle].props, mainMenu.props)
      },
    },

    {
      description: 'Major Appliances Menu must be stated',
      failMsg: `You havent declared ${majorMenuTitle} on your menu.jsonc file`,
      test: ({ ctx }) => {
        try {
          return !!ctx.jsonMenu[majorMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Major Appliances must have correct children',
      failMsg: `You havent declared the children ${majorMenu.children.join(', ')} on ${majorMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[majorMenuTitle].children, majorMenu.children)
      },
    },
    {
      description: 'Major Appliances Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${majorMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[majorMenuTitle].props, majorMenu.props)
      },
    },

    {
      description: 'Small Appliances Menu must be stated',
      failMsg: `You havent declared ${smallMenuTitle} on your menu.jsonc file`,
      test: ({ ctx }) => {
        try {
          return !!ctx.jsonMenu[smallMenuTitle]
        } catch {
          return false
        }
      },
    },
    {
      description: 'Small Appliances must have correct children',
      failMsg: `You havent declared the children ${smallMenu.children.join(', ')} on ${smallMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[smallMenuTitle].children, smallMenu.children)
      },
    },
    {
      description: 'Small Appliances Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${smallMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[smallMenuTitle].props, smallMenu.props)
      },
    },

    {
      description: 'Electronics Menu must be stated',
      failMsg: `You havent declared ${electronicsMenuTitle} on your menu.jsonc file`,
      test: ({ ctx }) => {
        return !!ctx.jsonMenu[electronicsMenuTitle]
      },
    },
    {
      description: 'Electronics Menu must have correct children',
      failMsg: `You havent declared the children ${electronicsMenu.children.join(', ')} on ${electronicsMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[electronicsMenuTitle].children, electronicsMenu.children)
      },
    },
    {
      description: 'Electronics Menu must be on vertical orientation',
      failMsg: `You havent declared props "orientation" as "vertical" on ${electronicsMenuTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[electronicsMenuTitle].props, electronicsMenu.props)
      },
    },

    {
      description: 'Menu row must be placed as last child of header',
      failMsg: `You havent declared ${menuRowTitle} as last child of ${headerTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { last },
        } = ctx
        return last(ctx.jsonHeader[headerTitle].children) === menuRowTitle
      },
    },

    {
      description: 'Drawer must be placed as first child of header mobile',
      failMsg: `You havent declared ${drawerTitle} as first child of ${headerMobileTitle}`,
      test: ({ ctx }) => {
        return ctx.jsonHeader[headerMobileTitle].children[0] == drawerTitle
      },
    },

    {
      description: 'Menu row must have correct children',
      failMsg: `You havent declared ${menuRowChildren.join(', ')} as children of ${menuRowTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonHeader[menuRowTitle].children, menuRowChildren)
      },
    },

    {
      description: 'Major Submenu must have major menu as children',
      failMsg: `You havent declared ${majorMenuTitle} as children of ${submenuMajorTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[submenuMajorTitle].children, [majorMenuTitle])
      },
    },

    {
      description: 'Small Submenu must have small menu as children',
      failMsg: `You havent declared ${smallMenuTitle} as children of ${submenuSmallTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[submenuSmallTitle].children, [smallMenuTitle])
      },
    },

    {
      description: 'Electronics Submenu must have electronics menu as children',
      failMsg: `You havent declared ${electronicsMenuTitle} as children of ${submenuElectronicsTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenu[submenuElectronicsTitle].children, [electronicsMenuTitle])
      },
    },
  ],
} as TestCase
