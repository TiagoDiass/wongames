import 'match-media-mock';
import BannerSlider, { BannerSliderProps } from './BannerSlider';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const banners: BannerSliderProps['banners'] = [
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
  }
];

describe('Component: BannerSlider', () => {
  it('should render the slider vertically', () => {
    const { container } = renderWithTheme(<BannerSlider banners={banners} />);

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should render only one active item in the slider', () => {
    const { container } = renderWithTheme(<BannerSlider banners={banners} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);
  });

  it('should render the items', () => {
    renderWithTheme(<BannerSlider banners={banners} />);

    expect(
      screen.getByRole('heading', { name: banners[0].title, hidden: false })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: banners[1].title, hidden: true })
    ).toBeInTheDocument();
  });
});
