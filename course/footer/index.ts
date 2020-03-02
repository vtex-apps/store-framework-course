import { jsonc } from 'jsonc'
import { prop, map, toLower } from 'ramda'

import { getFile } from '../../../utils'

let footerFileContent: Record<string, any>

export const footer = {
  before: async (args: any) => {
    try {
      const getFooterFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/footer.jsonc',
        'footer'
      )
      footerFileContent = jsonc.parse(getFooterFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a footer.jsonc file on your repository :("
      )
    }
  },
  branch: 'footer',
  issueNumber: 25,
  tests: [
    {
      description: 'Add a `flex-layout.row` inside of `footer-layout.desktop`',
      failMsg:
        'Could not find `flex-layout.row` inside of `footer-layout.desktop`',
      test: () => {
        try {
          const footerLayoutChildren: string[] =
            footerFileContent['footer-layout.desktop']['children']

          return (
            footerLayoutChildren.filter(block =>
              Boolean(block.match(/flex-layout.row/))
            ).length > 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Add `flex-layout.col#footer-left-desktop` inside of `flex-layout.row#footer-1-desktop`',
      failMsg:
        'Could not find `flex-layout.col#footer-left-desktop` inside of `flex-layout.row#footer-1-desktop`',
      test: () => {
        try {
          const footerLayoutChildren: string[] =
            footerFileContent['flex-layout.row#footer-1-desktop']['children']

          return (
            footerLayoutChildren.filter(block =>
              Boolean(block.match(/flex-layout.col#footer-left-desktop/))
            ).length > 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Add `flex-layout.col#footer-right-desktop` inside of `flex-layout.row#footer-1-desktop`',
      failMsg:
        'Could not find `flex-layout.col#footer-right-desktop` inside of `flex-layout.row#footer-1-desktop`',
      test: () => {
        try {
          const footerLayoutChildren: string[] =
            footerFileContent['flex-layout.row#footer-1-desktop']['children']

          return (
            footerLayoutChildren.filter(block =>
              Boolean(block.match(/flex-layout.col#footer-right-desktop/))
            ).length > 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        '`accepted-payment-methods` inside of `flex-layout.col#footer-left-desktop`',
      failMsg:
        'Could not find `accepted-payment-methods` inside of `flex-layout.col#footer-left-desktop`',
      test: () => {
        try {
          const footerLayoutChildren: string[] =
            footerFileContent['flex-layout.col#footer-left-desktop']['children']

          return (
            footerLayoutChildren.filter(block =>
              Boolean(block.match(/accepted-payment-methods/))
            ).length > 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'props of `accepted-payment-methods` are properly configured',
      failMsg: "Couldn't find the required props in `accepted-payment-methods`",
      test: () => {
        try {
          const acceptedPaymentsBlock = prop(
            'accepted-payment-methods',
            footerFileContent
          )
          const { props: acceptedPaymentsProps } = acceptedPaymentsBlock
          const paymentMethods = map(toLower, prop('paymentMethods', acceptedPaymentsProps))
          const showInColor = prop('showInColor', acceptedPaymentsProps)
          let success = true
          success = success && paymentMethods.includes('mastercard')
          success = success && paymentMethods.includes('visa')
          success = success && paymentMethods.includes('diners club')
          success = success && showInColor
          return success
        } catch {
          return false
        }
      },
    },
    {
      description:
        '`social-networks` inside of `flex-layout.col#footer-right-desktop`',
      failMsg:
        'Could not find `social-networks` inside of `flex-layout.col#footer-right-desktop`',
      test: () => {
        try {
          const footerLayoutChildren: string[] =
            footerFileContent['flex-layout.col#footer-right-desktop'][
              'children'
            ]

          return (
            footerLayoutChildren.filter(block =>
              Boolean(block.match(/social-networks/))
            ).length > 0
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'props of `social-networks` are properly configured',
      failMsg: "Couldn't find the required props in `social-networks`",
      test: () => {
        try {
          const socialNetworksBlock = prop('social-networks', footerFileContent)
          const { props: socialNetworkProps } = socialNetworksBlock
          const socialNetworks = prop('socialNetworks', socialNetworkProps)
          const showInColor = prop('showInColor', socialNetworkProps)
          let success = true
          success = success && showInColor
          const requiredSocialNetworks = ['Facebook', 'Instagram', 'Twitter']
          success =
            success &&
            socialNetworks.every((network: any) =>
              requiredSocialNetworks.includes(network.name)
            )
          return Boolean(success)
        } catch {
          return false
        }
      },
    },
  ],
}
