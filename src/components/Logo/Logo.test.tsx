import Logo from './Logo';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

describe('Component: Logo', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render a black label when specified', () => {
    renderWithTheme(<Logo color='black' />);
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render a normal size logo when size is not specified', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render a bigger logo when specified', () => {
    renderWithTheme(<Logo size='large' />);
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a logo without text if hideOnMobile has been set', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText('Won Games').parentElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    });
  });
});
