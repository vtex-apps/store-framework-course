export default {
  tests: [
    {
      description: 'Getting the files',
      failMsg: "Didn't manage to load a slider-layout.jsonc file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile, parseJsonc } = ctx
        const getSliderLayoutFileResult = await getFile('store/blocks/slider-layout.jsonc')
        const getHomeFileResult = await getFile('store/blocks/home.jsonc')
        ctx.sliderLayoutFileContent = parseJsonc(getSliderLayoutFileResult)
        ctx.homeFileContent = parseJsonc(getHomeFileResult)
      },
    },
    {
      description: 'Add a slider-layout#home block to your home',
      failMsg: 'Could not find a slider-layout in your home',
      test: ({ ctx }) => {
        const homeBlocks: string[] = ctx.homeFileContent['store.home']['blocks']

        return homeBlocks.filter(block => Boolean(block.match(/slider-layout/))).length === 1
      },
    },
    {
      description: 'Make slider-layout have 6 brand images as children',
      failMsg: 'Did not find expected images in your slider-layout',
      test: ({ ctx }) => {
        const sliderLayoutChildren: string[] = ctx.sliderLayoutFileContent['slider-layout#home']['children']

        return (
          sliderLayoutChildren.includes('image#brand1') &&
          sliderLayoutChildren.includes('image#brand2') &&
          sliderLayoutChildren.includes('image#brand3') &&
          sliderLayoutChildren.includes('image#brand4') &&
          sliderLayoutChildren.includes('image#brand5') &&
          sliderLayoutChildren.includes('image#brand6')
        )
      },
    },
    {
      description: 'Add correct image src to each image block',
      failMsg: 'Could not find images with a src prop',
      test: ({ ctx }) => {
        const brandImage1SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand1']['props']['src']
        const brandImage2SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand2']['props']['src']
        const brandImage3SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand3']['props']['src']
        const brandImage4SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand4']['props']['src']
        const brandImage5SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand5']['props']['src']
        const brandImage6SrcProp: string | undefined = ctx.sliderLayoutFileContent['image#brand6']['props']['src']

        return Boolean(
          brandImage1SrcProp &&
            brandImage2SrcProp &&
            brandImage3SrcProp &&
            brandImage4SrcProp &&
            brandImage5SrcProp &&
            brandImage6SrcProp
        )
      },
    },
    {
      description: 'Make slider-layout have autoplay behavior but stop playing when the user hovers over an image',
      failMsg: 'There is something wrong with the autoplay configuration in your slider-layout',
      test: ({ ctx }) => {
        const sliderLayoutAutoplayProp: Record<string, boolean | number> =
          ctx.sliderLayoutFileContent['slider-layout#home']['props']['autoplay']

        return sliderLayoutAutoplayProp['timeout'] === 7000 && sliderLayoutAutoplayProp['stopOnHover'] === true
      },
    },
  ],
} as TestCase
