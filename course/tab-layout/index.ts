import { jsonc } from 'jsonc'

import { getFile } from '../../../utils'

let blocksFileContent: Record<string, any>

export const tablayout = {
  before: async (args: any) => {
    try {
      const getFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/about-us.jsonc',
        'tablayout'
      )
      blocksFileContent = jsonc.parse(getFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a about-us.jsonc file on your repository :("
      )
    }
  },
  branch: 'tablayout',
  issueNumber: 18,
  tests: [
    {
      description: 'Add a `tab-layout#home` to your `store.custom` template',
      failMsg:
        'Could not find a `tab-layout#home` block among the blocks for store.custom#about-us',
      test: () => {
        try {
          const storeCustomTemplateBlocks: string[] =
            blocksFileContent['store.custom#about-us']['blocks']

          return storeCustomTemplateBlocks.includes('tab-layout#home')
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Declare the block `tab-layout#home` with `tab-list#home` and `tab-content#home` block as children',
      failMsg:
        'Could not find a `tab-layout#home` with `tab-list#home` and `tab-content#home` block as children',
      test: () => {
        try {
          const tabLayoutBlockChildren: string[] =
            blocksFileContent['tab-layout#home']['children']

          return (
            tabLayoutBlockChildren.includes('tab-list#home') &&
            tabLayoutBlockChildren.includes('tab-content#home')
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Declare the block `tab-list#home` with two `tab-list.item` blocks as children',
      failMsg:
        'Could not find a `tab-list#home` block with two `tab-list.item` blocks as children',
      test: () => {
        try {
          const tabListBlockChildren: string[] =
            blocksFileContent['tab-list#home']['children']

          return (
            tabListBlockChildren.includes('tab-list.item#home1') &&
            tabListBlockChildren.includes('tab-list.item#home2')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make tab-list.item#home1 block show "Major Appliances"',
      failMsg:
        'Your tab-list.item#home1 block does not show the text "Major Appliances"',
      test: () => {
        try {
          const tabListItemProps: Record<string, any> =
            blocksFileContent['tab-list.item#home1']['props']

          const hasCorrectLabel =
            tabListItemProps['label'] === 'Major Appliances'

          return hasCorrectLabel
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make tab-list.item#home2 block show "Electronics"',
      failMsg:
        'Your tab-list.item#home2 block does not show the text "Electronics"',
      test: () => {
        try {
          const tabListItemProps: Record<string, any> =
            blocksFileContent['tab-list.item#home2']['props']

          const hasCorrectLabel = tabListItemProps['label'] === 'Electronics'

          return hasCorrectLabel
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Create `tab-content#home` with two `tab-content.item` blocks',
      failMsg:
        'Could not find a `tab-content#home` with the expected two `tab-content.item` blocks as children',
      test: () => {
        try {
          const tabContentChildren: string[] =
            blocksFileContent['tab-content#home']['children']

          return (
            tabContentChildren.includes('tab-content.item#home1') &&
            tabContentChildren.includes('tab-content.item#home2')
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Create `tab-content#home` with two `tab-content.item` blocks',
      failMsg:
        'Could not find a `tab-content#home` with the expected two `tab-content.item` blocks as children',
      test: () => {
        try {
          const tabContentChildren: string[] =
            blocksFileContent['tab-content#home']['children']

          return (
            tabContentChildren.includes('tab-content.item#home1') &&
            tabContentChildren.includes('tab-content.item#home2')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Add `rich-text` blocks to each `tab-content.item`',
      failMsg:
        'Could not find expected `rich-text` blocks listed as children to `tab-content.item`s',
      test: () => {
        try {
          const tabContentItem1Children: string[] =
            blocksFileContent['tab-content.item#home1']['children']
          const tabContentItem2Children: string[] =
            blocksFileContent['tab-content.item#home2']['children']

          return (
            tabContentItem1Children.includes('rich-text#home1') &&
            tabContentItem2Children.includes('rich-text#home2')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Add `tabId`s to `tab-content.item`s',
      failMsg:
        'Could not find expected `tabId`s listed as props of `tab-content.item`s',
      test: () => {
        try {
          const tabContentItem1Props: Record<string, any> =
            blocksFileContent['tab-content.item#home1']['props']
          const tabContentItem2Props: Record<string, any> =
            blocksFileContent['tab-content.item#home2']['props']

          return (
            tabContentItem1Props['tabId'] === 'majorAppliances' &&
            tabContentItem2Props['tabId'] === 'electronics'
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Declare the expected `rich-text` blocks that should show up in each tab',
      failMsg:
        'Could not find expected `rich-text`s declared in your template.',
      test: () => {
        try {
          const richText1PropsList: string[] = Object.keys(
            blocksFileContent['rich-text#home1']['props']
          )
          const richText2PropsList: string[] = Object.keys(
            blocksFileContent['rich-text#home2']['props']
          )

          return (
            richText1PropsList.includes('text') &&
            richText1PropsList.includes('textPosition') &&
            richText1PropsList.includes('font') &&
            richText2PropsList.includes('text') &&
            richText2PropsList.includes('textPosition') &&
            richText2PropsList.includes('font')
          )
        } catch {
          return false
        }
      },
    },
  ],
}
