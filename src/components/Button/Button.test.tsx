import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

const getButton = () => screen.getByRole('button', { name: 'Buy now' });

describe('Component: Button', () => {
  it('should render a medium size button by default', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(getButton()).toHaveStyle({
      height: '4rem',
      'font-size': `${theme.font.sizes.small}`,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    });
  });

  it('should render a small size button correctly when specified', () => {
    renderWithTheme(<Button size='small'>Buy now</Button>);

    expect(getButton()).toHaveStyle({
      height: '3rem',
      'font-size': `${theme.font.sizes.xsmall}`
    });
  });

  it('should render a large size button correctly when specified', () => {
    renderWithTheme(<Button size='large'>Buy now</Button>);

    expect(getButton()).toHaveStyle({
      height: '5rem',
      'font-size': `${theme.font.sizes.medium}`,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    });
  });

  it('should render a full width button correctly when specified', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(getButton()).toHaveStyleRule('width', '100%');
  });
});
