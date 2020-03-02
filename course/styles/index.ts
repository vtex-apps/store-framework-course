import { prop } from 'ramda'

import { getFile } from '../../../utils'
import { compareObjects } from '../../../resources/object-compare'

const stepData: any = {}

const BRANCH_NAME = 'styles'

const EXPECTED_SEMANTIC_CHANGES = {
  'active-on': {
    'action-secondary': '#52BAB7',
  },
  background: {
    'action-primary': '#52BAB7',
  },
  border: {
    'action-primary': '#52BAB7',
  },
  'hover-background': {
    'action-primary': '#45a6a3',
  },
  'hover-border': {
    'action-primary': '#45a6a3',
  },
  'hover-on': {
    'action-secondary': '#52BAB7',
  },
  'hover-text': {
    'action-primary': '#45a6a3',
  },
  on: {
    'action-secondary': '#52BAB7',
  },
  text: {
    'action-primary': '#52BAB7',
    link: '#52BAB7',
  },
} as any

export const styles = {
  before: async (args: any) => {
    try {
      stepData.style = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'styles/configs/style.json',
        BRANCH_NAME
      )
    } catch {
      throw new Error(
        "Didn't manage to load a style.json file on your repository :("
      )
    }
  },
  branch: BRANCH_NAME,
  issueNumber: 16,
  tests: [
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `style.json` file",
      test: () => {
        try {
          stepData.style = JSON.parse(stepData.style)
          return !!stepData.style
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make the correct color changes',
      failMsg: "You didn't make all the color changes required",
      test: () => {
        try {
          const semanticColors = stepData.style.semanticColors

          return compareObjects(EXPECTED_SEMANTIC_CHANGES, semanticColors, {
            caseSensitive: false,
          })
        } catch {
          return false
        }
      },
    },
    {
      description: 'Change the heading 1 size to `2.5rem`',
      failMsg: "You didn't change the heading 1 size to `2.5rem`",
      test: () => {
        try {
          const typography = stepData.style.typography

          return (
            prop('heading-1', typography.styles).fontSize.replace(/ /g, '') ===
            '2.5rem'
          )
        } catch {
          return false
        }
      },
    },
  ],
}
