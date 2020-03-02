import { jsonc } from 'jsonc'

import { getFile } from '../../../utils'

let blocksFileContent: Record<string, any>

export const richtextmarkdown = {
  before: async (args: any) => {
    try {
      const getFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/about-us.jsonc',
        'richtextmarkdown'
      )
      blocksFileContent = jsonc.parse(getFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a about-us.jsonc file on your repository :("
      )
    }
  },
  branch: 'richtextmarkdown',
  issueNumber: 19,
  tests: [
    {
      description: 'Update the label of `tab-list.item#home1`',
      failMsg:
        'Your `tab-list.item#home1` block does not have the correct label text',
      test: () => {
        try {
          const tabListItem1LabelProp: string =
            blocksFileContent['tab-list.item#home1']['props']['label']

          return tabListItem1LabelProp === 'Sobre'
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Update the text content of the `rich-text` block associated with `tab-list.item#home1`',
      failMsg:
        'The text content of the `rich-text` block associated with `tab-list.item#home1` does not match the expected format',
      test: () => {
        try {
          const richTextTextProp: string =
            blocksFileContent['rich-text#home1']['props']['text']

          return Boolean(richTextTextProp.match(/## /))
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make the title and subtitle and the markdown text bold',
      failMsg:
        'The text content of the `rich-text` block associated with `tab-list.item#home1` does not match the expected format',
      test: () => {
        try {
          const richTextTextProp: string =
            blocksFileContent['rich-text#home1']['props']['text']

          const bold1 = !!richTextTextProp.match(/# ?\*\* ?Nossa/)
          const bold2 = !!richTextTextProp.match(/da VTEX! ?\*\*/)

          return bold1 && bold2

        } catch {
          return false
        }
      },
    },
  ],
}
