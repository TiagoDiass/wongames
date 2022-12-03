import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground, setStoryLayout } from 'utils/stories-utils';
import Menu from './Menu';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    ...setStoryLayout('fullscreen'),
    ...setStoryDefaultBackground('Dark')
  }
} as ComponentMeta<typeof Menu>;

export const Basic: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;
