import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Keep me signed in',
    labelFor: 'keepSignedIn',
    labelColor: 'black'
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as ComponentMeta<typeof Checkbox>;

export const Basic: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;
