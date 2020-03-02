import { jsonc } from 'jsonc'
import { getFile } from '../../../utils'

let blocksFileContent: Record<string, any>

export const iframe = {
  before: async (args: any) => {
    try {
      const getFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/about-us.jsonc',
        'iframe'
      )
      blocksFileContent = jsonc.parse(getFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a about-us.jsonc file on your repository :("
      )
    }
  },
  branch: 'iframe',
  issueNumber: 20,
  tests: [
    {
      description:
        'Update the label from the `tab-list.item#home2` to Instagram',
      failMsg: '`tab-list.item#home2` does not have the expected label',
      test: () => {
        try {
          const tabListItem2Label: string =
            blocksFileContent['tab-list.item#home2']['props']['label']

          return tabListItem2Label === 'Instagram'
        } catch {
          return false
        }
      },
    },
    {
      description: 'Add an `iframe` to the tab labeled "Instagram"',
      failMsg: 'Could not find an `iframe` block inside your "Instagram" tab',
      test: () => {
        try {
          const tabContentItem2Children: string[] =
            blocksFileContent['tab-content.item#home2']['children']

          return tabContentItem2Children.includes('iframe')
        } catch {
          return false
        }
      },
    },
    {
      description: 'Configure your iframe to show an Instagram post',
      failMsg:
        'Your iframe is not configured according to the instructions for this step',
      test: () => {
        try {
          const iframe = blocksFileContent['iframe']

          return (
            iframe.props.src ===
              'https://www.instagram.com/p/B37Zfd6FobU/embed' &&
            iframe.props.width === 800 &&
            iframe.props.height === 1000
          )
        } catch {
          return false
        }
      },
    },
  ],
}
