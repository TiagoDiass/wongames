import GameCard, { GameCardProps } from './GameCard';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import theme from 'styles/theme';
import userEvent from '@testing-library/user-event';

const GAMECARD_PROPS: GameCardProps = {
  title: 'Red Dead Redemption 2',
  developer: 'Rockstar Games',
  image: '/img/red-dead-gamecard.png',
  price: '$235,00'
} as const;

describe('Component: GameCard', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} />);

    expect(screen.getByRole('heading', { name: GAMECARD_PROPS.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: GAMECARD_PROPS.developer })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: GAMECARD_PROPS.title })).toHaveAttribute(
      'src',
      GAMECARD_PROPS.image
    );
    expect(screen.getByText(GAMECARD_PROPS.price)).toBeInTheDocument();
    expect(screen.getByLabelText('Add to Wishlist')).toBeInTheDocument();
  });

  it('should render price in label when its not promotional', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} />);

    const priceElement = screen.getByText(GAMECARD_PROPS.price);

    expect(priceElement).toHaveStyleRule('background-color', theme.colors.secondary);
    expect(priceElement).not.toHaveStyleRule('color', theme.colors.gray);
    expect(priceElement).not.toHaveStyleRule('text-decoration', 'line-through');
  });

  it('should render a line-trough when game is with promotional a price', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} promotionalPrice='$15,00' />);

    expect(screen.getByText(GAMECARD_PROPS.price)).toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByText('$15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });

  it('should render a filled favorite icon when game is favorited', () => {
    renderWithTheme(<GameCard {...GAMECARD_PROPS} favorite />);

    expect(screen.queryByLabelText('Add to Wishlist')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Remove from Wishlist')).toBeInTheDocument();
  });

  it('should call onFavorite() when user clicks on the favorite icon', async () => {
    const onFavoriteMock = jest.fn();

    renderWithTheme(<GameCard {...GAMECARD_PROPS} onFavorite={onFavoriteMock} />);

    userEvent.click(screen.getByLabelText('Add to Wishlist'));

    await waitFor(() => {
      expect(onFavoriteMock).toHaveBeenCalledTimes(1);
    });
  });
});
