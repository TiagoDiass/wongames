import Menu from './Menu';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const getLink = (linkName: string | RegExp) => screen.queryByRole('link', { name: linkName });

describe('Component: Menu', () => {
  it('should render correctly', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Won Games' })).toBeInTheDocument(); // logo
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open your shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close menu action', async () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    userEvent.click(screen.getByLabelText(/open menu/i));

    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');
      expect(fullMenuElement).toHaveStyle({ opacity: 1 });
    });

    userEvent.click(screen.getByLabelText(/close menu/i));

    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');
      expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    });
  });

  it('should render the full open menu correctly when there is no user logged in', async () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // opening the menu
    userEvent.click(screen.getByLabelText(/open menu/i));

    // checking if it's open
    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');
      expect(fullMenuElement).toHaveStyle({ opacity: 1 });
    });

    // checking if it has the correct content
    expect(getLink('Home')).toBeInTheDocument();
    expect(getLink('Explore')).toBeInTheDocument();
    expect(getLink('My Account')).not.toBeInTheDocument();
    expect(getLink('Wishlist')).not.toBeInTheDocument();
    expect(getLink('Log in now')).toBeInTheDocument();
    expect(getLink('Sign up')).toBeInTheDocument();
  });

  it('should render the full open menu correctly when there is a user logged in', async () => {
    renderWithTheme(<Menu username='AnyUser' />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // opening the menu
    userEvent.click(screen.getByLabelText(/open menu/i));

    // checking if it's open
    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');
      expect(fullMenuElement).toHaveStyle({ opacity: 1 });
    });

    // checking if it has the correct content
    expect(getLink('Home')).toBeInTheDocument();
    expect(getLink('Explore')).toBeInTheDocument();
    expect(getLink('My Account')).toBeInTheDocument();
    expect(getLink('Wishlist')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Log in now' })).not.toBeInTheDocument();
    expect(getLink('Sign up')).not.toBeInTheDocument();
  });
});
