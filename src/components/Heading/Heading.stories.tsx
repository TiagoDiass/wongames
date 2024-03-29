import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground } from 'utils/stories-utils';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    ...setStoryDefaultBackground('Dark')
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Heading>;

export const Basic: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;
Basic.args = {
  children: 'Example Heading'
};
