import { ComponentMeta, ComponentStory } from '@storybook/react';
import BannerSlider from './BannerSlider';
import BannerSliderMock from './BannerSlider.mock';

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  },
  argTypes: {
    banners: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof BannerSlider>;

export const Basic: ComponentStory<typeof BannerSlider> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} banners={BannerSliderMock} />
  </div>
);
