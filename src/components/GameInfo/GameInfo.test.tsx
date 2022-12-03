import GameInfo from './GameInfo';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('Component: GameInfo', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <GameInfo title='Game title' description='Game description' price='210.00' />
    );

    expect(screen.getByRole('heading', { name: 'Game title' })).toBeInTheDocument();
    expect(screen.getByText('Game description')).toBeInTheDocument();
    expect(screen.getByText('$210.00')).toBeInTheDocument();
    expect(screen.getByTitle('Add game to Wishlist')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
