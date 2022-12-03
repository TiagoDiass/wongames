import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setDefaultBackground } from 'utils/stories-utils';
import Logo from './Logo';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    ...setDefaultBackground('Dark')
  }
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
