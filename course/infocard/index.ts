import { jsonc } from 'jsonc'
import { prop } from 'ramda'

import { getFile } from '../../../utils'

const stepData: any = {}

export const infocard = {
  before: async (args: any) => {
    try {
      stepData.blocks = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/home.jsonc',
        'infocard'
      )
    } catch {
      throw new Error(
        "Didn't manage to load a home.jsonc file on your repository :("
      )
    }
  },
  branch: 'infocard',
  issueNumber: 5,
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
      description: 'Define two info cards in the home block',
      failMsg:
        "Home block doesn't have info-card#button-right or info-card#button-left",
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)

          const homeBlock = prop('blocks', prop('store.home', blocks))

          return (
            homeBlock.includes('info-card#button-right') &&
            homeBlock.includes('info-card#button-left')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Declare info-card#button-right and info-card#button-left',
      failMsg:
        'Your `blocks.jsonc` file is missing either info-card#button-right or info-card#button-left',
      test: () => {
        try {
          const blocks = jsonc.parse(stepData.blocks)
          return (
            !!prop('info-card#button-right', blocks) &&
            !!prop('info-card#button-left', blocks)
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Define the correct info card properties',
      failMsg: "You didn't use the info-card properties we're expecting",
      test: () => {
        try {
          const infoCardTitle = 'info-card#button-left'
          const infoCardProps = jsonc.parse(stepData.blocks)[infoCardTitle].props

          const hasLink = infoCardProps.callToActionMode === 'link'
          const isTextOnTheLeft = infoCardProps.textPosition === 'left'
          const isCorrectImage = infoCardProps.imageUrl === 'https://appliancetheme.vteximg.com.br/arquivos/cozinha-cinza-min.png'
          const isCorrectTitle = infoCardProps.headline === 'Shining chrome'

          return hasLink && isTextOnTheLeft && isCorrectImage && isCorrectTitle

        } catch {
          return false
        }
      },
    },
  ],
}
