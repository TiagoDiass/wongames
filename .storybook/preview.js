import { GlobalStyles } from 'styles';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBackground />
        <Story />
      </ThemeProvider>
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: theme.colors.white },
      { name: 'Dark', value: theme.colors.mainBg },
      { name: 'Light Blue', value: '#5DADE2' }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
