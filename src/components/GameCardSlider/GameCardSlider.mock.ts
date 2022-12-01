import { GameCardSliderProps } from './GameCardSlider';

const GameCardSliderMock: GameCardSliderProps['games'] = [
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
    title: 'CS: Global Offensive',
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
  },
  {
    title: 'Red Dead Repeating',
    developer: 'Rockstar Games',
    image: '/img/red-dead-gamecard.png',
    price: '$215,00',
    favorite: true
  }
];

export default GameCardSliderMock;
