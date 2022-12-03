import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryLayout } from 'utils/stories-utils';
import Highlight from './Highlight';
import HighlightMock from './Highlight.mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...HighlightMock },
  parameters: {
    ...setStoryLayout('fullscreen')
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
