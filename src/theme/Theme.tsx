import React, { FC, ReactChild } from 'react';
import { createGlobalStyle, css, ThemeProvider, keyframes } from 'styled-components';
import { color } from './color';
import { spacing } from './spacing';
import { Join, PathsToStringProps } from './types';

const minWidthQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

const gradient = keyframes`
	0%, 100% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
`

export const THEME: Record<string, any> = {
  baseFontSize: 16,
  breakpoints: {
    sm: minWidthQuery(480),
    md: minWidthQuery(768),
    lg: minWidthQuery(1024),
    xl: minWidthQuery(1200),
  },
  colors: {
    indigo: {
      '50': 'hsl(231,44%,94%)',
      '100': 'hsl(232,45%,84%)',
      '200': 'hsl(231,44%,74%)',
      '300': 'hsl(230,44%,64%)',
      '400': 'hsl(231,44%,56%)',
      '500': 'hsl(231,48%,48%)',
      '600': 'hsl(232,50%,45%)',
      '700': 'hsl(232,54%,41%)',
      '800': 'hsl(233,57%,37%)',
      '900': 'hsl(235,66%,30%)',
      'accent-100': 'hsl(231,100%,77%)',
      'accent-200': 'hsl(231,99%,66%)',
      'accent-400': 'hsl(231,99%,62%)',
      'accent-700': 'hsl(231,99%,59%)',
    },
    green: {
      '50': 'hsl(88,52%,94%)',
      '100': 'hsl(88,51%,86%)',
      '200': 'hsl(88,50%,76%)',
      '300': 'hsl(88,50%,67%)',
      '400': 'hsl(88,50%,60%)',
      '500': 'hsl(88,50%,53%)',
      '600': 'hsl(89,46%,48%)',
      '700': 'hsl(92,48%,42%)',
      '800': 'hsl(95,49%,36%)',
      '900': 'hsl(103,56%,26%)',
      'accent-100': 'hsl(88,100%,78%)',
      'accent-200': 'hsl(88,100%,67%)',
      'accent-400': 'hsl(93,100%,51%)',
      'accent-700': 'hsl(97,81%,48%)',
    },
    grey: {
      '50': 'hsl(0,0%,98%)',
      '100': 'hsl(0,0%,96%)',
      '200': 'hsl(0,0%,93%)',
      '300': 'hsl(0,0%,88%)',
      '400': 'hsl(0,0%,74%)',
      '500': 'hsl(0,0%,62%)',
      '600': 'hsl(0,0%,46%)',
      '700': 'hsl(0,0%,38%)',
      '800': 'hsl(0,0%,26%)',
      '900': 'hsl(0,0%,13%)'
    },
    orange: {
      '50': 'hsl(6, 71%, 95%)',
      '100': 'hsl(14, 100%, 87%)',
      '200': 'hsl(14, 100%, 78%)',
      '300': 'hsl(14, 100%, 70%)',
      '400': 'hsl(14, 100%, 63%)',
      '500': 'hsl(14, 100%, 57%)',
      '600': 'hsl(14, 91%, 54%)',
      '700': 'hsl(14, 80%, 50%)',
      '800': 'hsl(14, 82%, 46%)',
      '900': 'hsl(14, 88%, 40%)',
      'accent-100': 'hsl(14, 100%, 75%)',
      'accent-200': 'hsl(14, 100%, 63%)',
      'accent-400': 'hsl(14, 100%, 50%)',
      'accent-700': 'hsl(12, 100%, 43%)',
    }
  },
  fonts: {
    inter: '"Inter", sans-serif'
  },
  spacing: [
    0,
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96,
  ],
}

THEME.colors.primary = THEME.colors.indigo
THEME.colors.secondary = THEME.colors.green

export type Theme = typeof THEME

export type ColorSetKey = keyof Theme['colors']

export type ColorSet<T extends ColorSetKey = ColorSetKey> = Theme['colors'][T]

export type ColorKey<T extends ColorSet = ColorSet> = T extends ColorSet
  ? keyof T
  : never

export type ColorPath = Join<PathsToStringProps<Theme['colors']>, '.'>

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface,@typescript-eslint/no-unused-vars
  interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Inter', sans-serif;
    height: 100vh;
  }
  body {
    background-color: #081219;
    background-image: linear-gradient(to right bottom, #1a237e, #0066cd, #00a1d7, #00d696, #76ff03);
    background-image: linear-gradient(-45deg, ${color('indigo.900')}, ${color('indigo.700')},${color('indigo.400')}, ${color('green.accent-200')} ${color('green.accent-400')});
    background-size: 400% 400%;
    animation: ${gradient} 20s ease infinite;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    color: ${color('primary.900')};
    font-family: "Inter", sans-serif;
    display: grid;
    main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  hr {
    width: 100%;
    background-color: ${color('primary.500')};
    height: 1px;
    border: none;
  }
  ${THEME.spacing.map(
    (space: number) =>
      css`
        .mt-${space} {
          margin-top: ${spacing(space)};
        }
        .ml-${space} {
          margin-left: ${spacing(space)};
        }
        .mr-${space} {
          margin-right: ${spacing(space)};
        }
        .mb-${space} {
          margin-bottom: ${spacing(space)};
        }
        .pt-${space} {
          padding-top: ${spacing(space)};
        }
        .pl-${space} {
          padding-left: ${spacing(space)};
        }
        .pr-${space} {
          padding-right: ${spacing(space)};
        }
        .pb-${space} {
          padding-bottom: ${spacing(space)};
        }
      `
  )}
`

interface Props {
  children: ReactChild | JSX.Element[]
}

export const GlowTheme: FC<Props> = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)