import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

Basic.parameters = {
  backgrounds: {
    default: 'Dark'
  }
};
