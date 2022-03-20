import { ComponentMeta, ComponentStory } from '@storybook/react';
import Menu from './Menu';

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

export const Basic: ComponentStory<typeof Menu> = () => <Menu />;

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'Dark'
  }
};
