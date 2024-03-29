import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground, setStoryLayout } from 'utils/stories-utils';
import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    ...setStoryLayout('fullscreen'),
    ...setStoryDefaultBackground('Dark')
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as ComponentMeta<typeof Checkbox>;

export const Basic: ComponentStory<typeof Checkbox> = (args) => (
  <div style={{ padding: 10, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
    <Checkbox name='category' label='Action' labelFor='action' isChecked {...args} />

    <Checkbox name='category' label='Adventure' labelFor='adventure' {...args} />

    <Checkbox name='category' label='Strategy' labelFor='strategy' {...args} />
  </div>
);
