import { jsonc } from 'jsonc'
import { find, prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

export const richtext = {
  before: async (args: any): Promise<void> => {
    try {
      stepData.blocks = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/home.jsonc',
        'richtext'
      )
    } catch {
      throw new Error(
        "Didn't manage to load a home.jsonc file on your repository :("
      )
    }
  },
  branch: 'richtext',
  issueNumber: 4,
  tests: [
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `blocks.jsonc` file",
      test: () => {
        try {
          return !!jsonc.parse(stepData.blocks)
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define the rich text in the home block',
      failMsg: "There's no rich text in your home block",
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)

          const richText = find((homeBlock: string) => {
            return homeBlock.includes('rich-text')
          }, prop('blocks', prop('store.home', blocks)))

          return !!richText
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make a rich text declaration',
      failMsg: "There's no rich text declaration in your `blocks.jsonc` file",
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)
          return !!prop('rich-text', blocks)
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define bold Hello, World!',
      failMsg: 'Your text is not bold',
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)

          return /\*\*.+\*/g.test(prop('rich-text', blocks).props.text)
        } catch {
          return false
        }
      },
    },
    {
      description: 'Hello, World! positioned right',
      failMsg: 'Your text is not positioned at right',
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)

          return prop('rich-text', blocks).props.textPosition === 'RIGHT'
        } catch {
          return false
        }
      },
    },
  ],
}
