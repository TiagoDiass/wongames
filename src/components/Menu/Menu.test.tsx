import Menu from './Menu';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    expect(fullMenuElement).toHaveStyle({ opacity: 0, display: 'none' });

    userEvent.click(screen.getByLabelText(/open menu/i));

    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'false');
      expect(fullMenuElement).toHaveStyle({ opacity: 1, display: 'block' });
    });

    userEvent.click(screen.getByLabelText(/close menu/i));

    await waitFor(() => {
      expect(fullMenuElement).toHaveAttribute('aria-hidden', 'true');
      expect(fullMenuElement).toHaveStyle({ opacity: 0, display: 'none' });
    });
  });
});
