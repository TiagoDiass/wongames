import { ComponentMeta, ComponentStory } from '@storybook/react';
import Highlight from './Highlight';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: "Come see Arthur's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    backgroundImage: '/img/red-dead-background.jpg'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>;

export const Basic: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.storyName = 'With a floating image';
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
};
