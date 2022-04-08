import 'match-media-mock';
import GameCardSlider, { GameCardSliderProps } from './GameCardSlider';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

const games: GameCardSliderProps['games'] = [
  {
    title: 'Resident Evil 3',
    developer: 'Capcom',
    image: '/img/resident-evil-gamecard.png',
    price: '$200,00',
    promotionalPrice: '$100,00',
    ribbon: { children: '50% OFF', color: 'primary', size: 'small' }
  },
  {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    image: '/img/red-dead-gamecard.png',
    price: '$215,00',
    favorite: true
  },
  {
    title: 'Project Winter',
    developer: 'Other Ocean Group',
    image: '/img/project-winter-gamecard.png',
    price: '$65,00'
  },
  {
    title: 'Counter Strike: Global Offensive',
    developer: 'Valve',
    image:
      'https://assets.propmark.com.br/uploads/2020/11/7ee27e3c7ca9b2434381b2728cedb5a4.CSGO-Operation-10-Details.jpg',
    price: '$0,00',
    ribbon: { children: 'TOP FREE' }
  },
  {
    title: 'Borderlands 3',
    developer: 'Gearbox Software',
    image: '/img/borderlands-3-gamecard.png',
    price: '$65,00'
  }
];

describe('Component: GameCardSlider', () => {
  it('should render 4 active items in the slider', () => {
    const { container } = renderWithTheme(<GameCardSlider games={games} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(games.length);
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });

  it('should render arrows', () => {
    renderWithTheme(<GameCardSlider games={games} />);

    expect(screen.getByLabelText('previous games')).toBeInTheDocument();
    expect(screen.getByLabelText('next games')).toBeInTheDocument();
  });

  it('should render black arrows if arrowColors is specified', () => {
    renderWithTheme(<GameCardSlider games={games} arrowsColor='black' />);

    expect(screen.getByLabelText('previous games')).toHaveStyle({ color: theme.colors.black });
    expect(screen.getByLabelText('next games')).toHaveStyle({ color: theme.colors.black });
  });
});
