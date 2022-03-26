import GameCard, { GameCardProps } from './GameCard';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const GAMECARD_PROPS: GameCardProps = {
  title: 'Red Dead Redemption 2',
  developer: 'Rockstar Games',
  image: '/img/red-dead-gamecard.png',
  price: '$215,00'
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
});
