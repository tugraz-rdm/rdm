import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
  options: {
    safelist: ['layout.css'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      // https://vercel.com/design/color,
      colors: {
        gray: colors.zinc,
        'gray-1000': 'rgb(17,17,19)',
        'gray-1100': 'rgb(10,10,11)',
        'white-smoke': '#F5F5F5',
        'light-grey': '#D6D6D6',
        'red-tu': '#E4154B',
        'custom-red': '#E4154B',
        'custom-gray': '#D6D6D6',
        'custom-black': '#1B1B1E',
        'custom-orange': '#FAA916',
        'custom-white': '#FIEDEE',
        'custom-green': '#8AA29E',
        'custom-blue': '#1D4960',
        'custom-blue-dark': '#1D4960',
        'custom-bone': '#DAD2BC',
        'custom-isabelline': '#F5F1ED',
        vercel: {
          blue: '#FF0080',
          cyan: '#50E3C2',
          orange: '#FFA31A',
          violet: '#7928CA',
        },
        fontFace: {
          'font-display': 'swap',
        },
      },
      backgroundImage: ({ theme }) => ({
        'vc-border-gradient': `radial-gradient(at left top, ${theme(
          'colors.gray.500'
        )}, 50px, ${theme('colors.gray.800')} 50%)`,
        'custom-background': "url('/test.jpg')",
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.vercel.blue'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.blue'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.blue'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.vercel.blue'),
            color: theme('colors.white'),
          },
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      opacity: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
