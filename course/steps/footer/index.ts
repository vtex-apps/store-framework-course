export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a footer.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const getFooterFileResult = await getFile('store/blocks/footer.jsonc')
        ctx.footerFileContent = parseJsonc(getFooterFileResult)
        return true
      },
    },
    {
      description: 'Add a `flex-layout.row` inside of `footer-layout.desktop`',
      failMsg: 'Could not find `flex-layout.row` inside of `footer-layout.desktop`',
      test: ({ ctx }) => {
        const footerLayoutChildren: string[] = ctx.footerFileContent['footer-layout.desktop']['children']

        return footerLayoutChildren.filter(block => Boolean(block.match(/flex-layout.row/))).length > 0
      },
    },
    {
      description: 'Add `flex-layout.col#footer-left-desktop` inside of `flex-layout.row#footer-1-desktop`',
      failMsg: 'Could not find `flex-layout.col#footer-left-desktop` inside of `flex-layout.row#footer-1-desktop`',
      test: ({ ctx }) => {
        const footerLayoutChildren: string[] = ctx.footerFileContent['flex-layout.row#footer-1-desktop']['children']

        return (
          footerLayoutChildren.filter(block => Boolean(block.match(/flex-layout.col#footer-left-desktop/))).length > 0
        )
      },
    },
    {
      description: 'Add `flex-layout.col#footer-right-desktop` inside of `flex-layout.row#footer-1-desktop`',
      failMsg: 'Could not find `flex-layout.col#footer-right-desktop` inside of `flex-layout.row#footer-1-desktop`',
      test: ({ ctx }) => {
        const footerLayoutChildren: string[] = ctx.footerFileContent['flex-layout.row#footer-1-desktop']['children']

        return (
          footerLayoutChildren.filter(block => Boolean(block.match(/flex-layout.col#footer-right-desktop/))).length > 0
        )
      },
    },
    {
      description: '`accepted-payment-methods` inside of `flex-layout.col#footer-left-desktop`',
      failMsg: 'Could not find `accepted-payment-methods` inside of `flex-layout.col#footer-left-desktop`',
      test: ({ ctx }) => {
        const footerLayoutChildren: string[] = ctx.footerFileContent['flex-layout.col#footer-left-desktop']['children']

        return footerLayoutChildren.filter(block => Boolean(block.match(/accepted-payment-methods/))).length > 0
      },
    },
    {
      description: 'props of `accepted-payment-methods` are properly configured',
      failMsg: "Couldn't find the required props in `accepted-payment-methods`",
      test: ({ ctx }) => {
        const {
          ramda: { toLower },
        } = ctx
        const acceptedPaymentsBlock = ctx.footerFileContent?.['accepted-payment-methods']
        const { props: acceptedPaymentsProps } = acceptedPaymentsBlock
        const paymentMethods = acceptedPaymentsProps?.paymentMethods.map(toLower)
        const showInColor = acceptedPaymentsProps?.showInColor
        let success = true
        success = success && paymentMethods.includes('mastercard')
        success = success && paymentMethods.includes('visa')
        success = success && paymentMethods.includes('diners club')
        success = success && showInColor
        return success
      },
    },
    {
      description: '`social-networks` inside of `flex-layout.col#footer-right-desktop`',
      failMsg: 'Could not find `social-networks` inside of `flex-layout.col#footer-right-desktop`',
      test: ({ ctx }) => {
        const footerLayoutChildren: string[] = ctx.footerFileContent['flex-layout.col#footer-right-desktop']['children']

        return footerLayoutChildren.filter(block => Boolean(block.match(/social-networks/))).length > 0
      },
    },
    {
      description: 'props of `social-networks` are properly configured',
      failMsg: "Couldn't find the required props in `social-networks`",
      test: ({ ctx }) => {
        const socialNetworksBlock = ctx.footerFileContent?.['social-networks']
        const { props: socialNetworkProps } = socialNetworksBlock
        const socialNetworks = socialNetworkProps?.['socialNetworks']
        const showInColor = socialNetworkProps?.['showInColor']
        let success = true
        success = success && showInColor
        const requiredSocialNetworks = ['facebook', 'instagram', 'twitter']
        success = success && socialNetworks.every((network: any) => requiredSocialNetworks.includes(network.name.toLowerCase()))
        return Boolean(success)
      },
    },
  ],
} as TestCase
