import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;
