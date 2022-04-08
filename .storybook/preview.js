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
      { name: 'Light', value: '#F2F2F2' },
      { name: 'Dark', value: '#2E2F42' },
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
