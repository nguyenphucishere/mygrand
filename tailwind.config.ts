import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        flyIn: {
          'from': {
            transform: 'translateX(5%)',
            opacity: '0'
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        flyIn2: {
          '0%':{
            transform: 'translateX(5%)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateX(5%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          }
        }
      },

      animation: {
        flyIn: 'flyIn 1s ease-out forwards',
        flyIn2: 'flyIn2 2s ease-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
