import { ComponentMeta, ComponentStory } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from './BannerSlider';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    banners: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof BannerSlider>;

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

export const Basic: ComponentStory<typeof BannerSlider> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <BannerSlider {...args} banners={banners} />
  </div>
);
