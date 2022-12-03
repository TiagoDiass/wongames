import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setDefaultBackground } from 'utils/stories-utils';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    ...setDefaultBackground('Dark')
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
