import { GlobalStyles } from '../src/styles';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'Light',
    values: [
      { name: 'Light', value: '#F2F2F2' },
      { name: 'Dark', value: '#2E2F42' },
      { name: 'Light Blue', value: '#5DADE2' }
    ]
  }
};
