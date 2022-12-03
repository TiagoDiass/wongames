import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setDefaultBackground } from 'utils/stories-utils';
import Menu from './Menu';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    ...setDefaultBackground('Dark')
  }
} as ComponentMeta<typeof Menu>;

export const Basic: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
