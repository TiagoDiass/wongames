import { createGlobalStyle, css, DefaultTheme, GlobalStyleComponent } from 'styled-components';

type GlobalStylesProps = {
  removeBackground?: boolean;
};

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit; // border-box
    }
  }

  ${({ theme, removeBackground }) => css`
    html {
      font-size: 62.5%; // 10px
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBackground &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}

  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-300.woff2') format('woff2');
  }

  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-regular.woff2') format('woff2');
  }

  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-600.woff2') format('woff2');
  }

  /* poppins-700 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''),
        url('/fonts/poppins-v19-latin-700.woff2') format('woff2');
  }
`;

export default GlobalStyles;
