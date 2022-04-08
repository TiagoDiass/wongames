import { BannerSliderProps } from './BannerSlider';

const BannerSliderMock: BannerSliderProps['banners'] = [
  {
    img: 'https://www.nerdsite.com.br/wp-content/uploads/2021/10/imagem_2021-09-09_183119-1.png',
    title: 'God of War Ragnarok',
    subtitle:
      '<p>Play the newest adventures of <strong>Kratos and Atreus</strong> in the continuation of one of the most loved games nowadays',
    buttonLabel: 'Buy now',
    buttonLink: '/games/god-of-war-ragnarok',
    ribbon: {
      children: 'HYPED'
    }
  },
  {
    img: 'https://olhardigital.com.br/wp-content/uploads/2021/05/Red-Dead-Redemption-2-Divulgacao.jpg',
    title: 'Red Dead Redemption 2',
    subtitle:
      '<p>Take a look and go through the <strong>coolest adventures</strong> in the continuation of RDR1',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
  {
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=580&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE2NDkwMzkxOTc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1042',
    title: 'Defy Death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
];

export default BannerSliderMock;
