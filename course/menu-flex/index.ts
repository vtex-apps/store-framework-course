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

export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Couldn't find `menu.jsonc`, `menu-flex.jsonc` files.",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.menu = await getFile('store/blocks/menu.jsonc')

        ctx.menuFlex = await getFile('store/blocks/menu-flex.jsonc')
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
      description: 'Code compilation: menu-flex.jsonc',
      failMsg: "There's something wrong with the format of your `menu-flex.jsonc` file",
      test: ({ ctx }) => {
        const { parseJsonc } = ctx
        ctx.jsonMenuFlex = parseJsonc(ctx.menuFlex)
        return !!ctx.jsonMenuFlex
      },
    },

    // {
    //   description: 'menu.jsonc must not contain major appliances submenu',
    //   failMsg: `You  must not declare ${submenuMajorTitle} on your menu.jsonc file`,
    //   test: ({ ctx }) => {
    //     try {
    //       return !ctx.jsonMenu[submenuMajorTitle]
    //     } catch {
    //       return false
    //     }
    //   },
    // },

    {
      description: 'Major appliances submenu must contain a flex-layout row as children',
      failMsg: `You  must declare ${flexRowTitle} as children of ${submenuMajorTitle}`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenuFlex[submenuMajorTitle].children, [flexRowTitle])
      },
    },

    {
      description: 'flex-layout row must be correctly stated',
      failMsg: `You must declare ${flexRowTitle} on menu-flex.jsonc`,
      test: ({ ctx }) => {
        return !!ctx.jsonMenuFlex[flexRowTitle]
      },
    },

    {
      description: 'flex-layout row must contain two cols as children',
      failMsg: `${flexRowTitle} must have ${flexColMenu}, ${flexColImg} as children `,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
          return equals(ctx.jsonMenuFlex[flexRowTitle].children, [flexColMenu, flexColImg])
      },
    },

    {
      description: 'flex-layout columns must be correctly stated',
      failMsg: `You must declare ${flexColMenu}, ${flexColImg} on menu-flex.jsonc`,
      test: ({ ctx }) => {
        try {
          return !!ctx.jsonMenuFlex[flexColMenu] && !!ctx.jsonMenuFlex[flexColImg]
        } catch {
          return false
        }
      },
    },

    {
      description: 'flex-layout colum must contain major appliances menu as children',
      failMsg: `${flexColMenu} must have no props and ${majorMenuTitle} as children`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        const majorMenuAsChildren = equals(ctx.jsonMenuFlex[flexColMenu].children, [majorMenuTitle])

        return !ctx.jsonMenuFlex[flexColMenu].props && majorMenuAsChildren
      },
    },
    {
      description: 'flex-layout colum must contain image and rich-text as children',
      failMsg: `${flexColImg} must have  ${imageTitle} and ${richTextTitle} as children`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenuFlex[flexColImg].children, [imageTitle, richTextTitle])
      },
    },

    {
      description: 'flex-layout colum must contain correct props',
      failMsg: `${flexColImg} must have  ${Object.keys(imgColProps).join(', ')} as children`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenuFlex[flexColImg].props, imgColProps)
      },
    },

    {
      description: 'flex-layout colum must contain correct props',
      failMsg: `${flexColImg} must have  ${Object.keys(imgColProps).join(', ')} as children`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenuFlex[flexColImg].props, imgColProps)
      },
    },

    {
      description: 'image component must be correctly stated',
      failMsg: `You must declare ${imageTitle} on menu-flex.jsonc`,
      test: ({ ctx }) => {
        return !!ctx.jsonMenuFlex[imageTitle]
      },
    },

    {
      description: 'image component must contain correct props',
      failMsg: `You must declare ${Object.keys(imgProps).join(', ')} on ${imageTitle}. Check their names and values.`,
      test: ({ ctx }) => {
        const {
          ramda: { equals },
        } = ctx
        return equals(ctx.jsonMenuFlex[imageTitle].props, imgProps)
      },
    },
  ],
}
