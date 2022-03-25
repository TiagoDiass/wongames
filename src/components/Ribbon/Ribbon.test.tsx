import Ribbon from './Ribbon';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

describe('Component: Ribbon', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText('Best Seller')).toBeInTheDocument();
  });

  it('should render with the primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText('Best Seller')).toHaveStyle({
      backgroundColor: theme.colors.primary
    });
  });

  it('should render with the secondary color when specified', () => {
    renderWithTheme(<Ribbon color='secondary'>Best Seller</Ribbon>);

    expect(screen.getByText('Best Seller')).toHaveStyle({
      backgroundColor: theme.colors.secondary
    });
  });

  it('should render with the normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText('Best Seller')).toHaveStyle({
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    });
  });

  it('should render with the small size when specified', () => {
    renderWithTheme(<Ribbon size='small'>Best Seller</Ribbon>);

    expect(screen.getByText('Best Seller')).toHaveStyle({
      height: '2.6rem',
      fontSize: theme.font.sizes.xsmall
    });
  });
});
