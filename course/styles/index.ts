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

export default {
  tests: [
    {
      description: 'Getting the file',
      failMsg: "Didn't manage to load a style.json file on your repository :(",
      test: async ({ ctx }) => {
        const { getFile } = ctx
        ctx.style = await getFile('styles/configs/style.json')
      },
    },
    {
      description: 'Code compilation',
      failMsg: "There's something wrong with your `style.json` file",
      test: ({ ctx }) => {
        ctx.style = JSON.parse(ctx.style)
        return !!ctx.style
      },
    },
    {
      description: 'Make the correct color changes',
      failMsg: "You didn't make all the color changes required",
      test: ({ ctx }) => {
        const semanticColors = ctx.style.semanticColors

        function compareObjects(
          obj1: Record<any, any>,
          obj2: Record<any, any>,
          configs: CompareConfigs = { caseSensitive: true }
        ) {
          //Loop through properties in object 1
          for (const p in obj1) {
            //Check property exists on both objects
            if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false

            switch (typeof obj1[p]) {
              //Deep compare objects
              case 'object':
                if (!compareObjects(obj1[p], obj2[p])) return false
                break
              //Compare function code
              case 'function':
                if (typeof obj2[p] == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString()))
                  return false
                break
              case 'string':
                return configs.caseSensitive ? obj1[p] == obj2[p] : obj1[p].toLowerCase() == obj2[p].toLowerCase()
              //Compare values
              default:
                return obj1[p] == obj2[p]
            }
          }

          return true
        }

        interface CompareConfigs {
          caseSensitive: boolean
        }
        return compareObjects(EXPECTED_SEMANTIC_CHANGES, semanticColors, {
          caseSensitive: false,
        })
      },
    },
    {
      description: 'Change the heading 1 size to `2.5rem`',
      failMsg: "You didn't change the heading 1 size to `2.5rem`",
      test: ({ ctx }) => {
          const typography = ctx.style.typography

          return  typography.styles?.['heading-1'].fontSize.replace(/ /g, '') === '2.5rem'
      },
    },
  ],
} as TestCase
