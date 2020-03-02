import { jsonc } from 'jsonc'

import { getFile } from '../../../utils'

let sliderLayoutFileContent: Record<string, any>
let homeFileContent: Record<string, any>

export const sliderlayout = {
  before: async (args: any) => {
    try {
      const getSliderLayoutFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/slider-layout.jsonc',
        'slider-layout'
      )
      const getHomeFileResult = await getFile(
        args.ctx,
        args.installationId,
        args.owner,
        args.repo,
        'store/blocks/home.jsonc',
        'slider-layout'
      )
      sliderLayoutFileContent = jsonc.parse(getSliderLayoutFileResult)
      homeFileContent = jsonc.parse(getHomeFileResult)
    } catch {
      throw new Error(
        "Didn't manage to load a slider-layout.jsonc file on your repository :("
      )
    }
  },
  branch: 'slider-layout',
  issueNumber: 9,
  tests: [
    {
      description: 'Add a slider-layout#home block to your home',
      failMsg: 'Could not find a slider-layout in your home',
      test: () => {
        try {
          const homeBlocks: string[] = homeFileContent['store.home']['blocks']

          return (
            homeBlocks.filter(block => Boolean(block.match(/slider-layout/)))
              .length === 1
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Make slider-layout have 6 brand images as children',
      failMsg: 'Did not find expected images in your slider-layout',
      test: () => {
        try {
          const sliderLayoutChildren: string[] =
            sliderLayoutFileContent['slider-layout#home']['children']

          return (
            sliderLayoutChildren.includes('image#brand1') &&
            sliderLayoutChildren.includes('image#brand2') &&
            sliderLayoutChildren.includes('image#brand3') &&
            sliderLayoutChildren.includes('image#brand4') &&
            sliderLayoutChildren.includes('image#brand5') &&
            sliderLayoutChildren.includes('image#brand6')
          )
        } catch {
          return false
        }
      },
    },
    {
      description: 'Add correct image src to each image block',
      failMsg: 'Could not find images with a src prop',
      test: () => {
        try {
          const brandImage1SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand1']['props']['src']
          const brandImage2SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand2']['props']['src']
          const brandImage3SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand3']['props']['src']
          const brandImage4SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand4']['props']['src']
          const brandImage5SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand5']['props']['src']
          const brandImage6SrcProp: string | undefined =
            sliderLayoutFileContent['image#brand6']['props']['src']

          return Boolean(
            brandImage1SrcProp &&
              brandImage2SrcProp &&
              brandImage3SrcProp &&
              brandImage4SrcProp &&
              brandImage5SrcProp &&
              brandImage6SrcProp
          )
        } catch {
          return false
        }
      },
    },
    {
      description:
        'Make slider-layout have autoplay behavior but stop playing when the user hovers over an image',
      failMsg:
        'There is something wrong with the autoplay configuration in your slider-layout',
      test: () => {
        try {
          const sliderLayoutAutoplayProp: Record<string, boolean | number> =
            sliderLayoutFileContent['slider-layout#home']['props']['autoplay']

          return (
            sliderLayoutAutoplayProp['timeout'] === 7000 &&
            sliderLayoutAutoplayProp['stopOnHover'] === true
          )
        } catch {
          return false
        }
      },
    },
  ],
}
