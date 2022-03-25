import { ComponentMeta, ComponentStory } from '@storybook/react';
import Highlight from './Highlight';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: "Come see Arthur's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>;

export const Basic: ComponentStory<typeof Highlight> = (args) => <Highlight {...args} />;
