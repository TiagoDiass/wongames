import Base from './Base';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-utils';

jest.mock('components/Menu/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid='menu-mock' />
}));

jest.mock('components/Footer/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid='footer-mock' />
}));

describe('Template: Base', () => {
  it('should render menu, footer and children correctly', () => {
    renderWithTheme(
      <Base>
        <h1>Example Heading</h1>
      </Base>
    );

    expect(screen.getByTestId('menu-mock')).toBeInTheDocument();
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Example Heading' })).toBeInTheDocument();
  });
});
