import Button from './Button';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from 'styles/theme';
import { AddShoppingCart } from 'styled-icons/material-outlined';

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

  it('should render a button with an icon when specified', () => {
    renderWithTheme(<Button icon={<AddShoppingCart data-testid='icon' />}>Buy now</Button>);

    expect(getButton()).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should call onClick() when user clicks on the button', async () => {
    const onClickMock = jest.fn();

    renderWithTheme(<Button onClick={onClickMock}>Buy now</Button>);

    userEvent.click(getButton());

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should render a button in a minimal version when specified', () => {
    renderWithTheme(
      <Button minimal icon={<AddShoppingCart data-testid='icon' />}>
        Buy now
      </Button>
    );

    expect(getButton()).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    });
  });

  it('should render the button as a link', () => {
    renderWithTheme(
      <Button as='a' href='/link'>
        Buy now
      </Button>
    );

    expect(screen.getByRole('link', { name: 'Buy now' })).toHaveAttribute('href', '/link');
  });

  it('should not call onClick and have aria-disabled when button is disabled', async () => {
    const onClickMock = jest.fn();

    renderWithTheme(
      <Button onClick={onClickMock} disabled>
        Buy now
      </Button>
    );

    const button = getButton();

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');

    userEvent.click(button);

    await waitFor(() => {
      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
});
