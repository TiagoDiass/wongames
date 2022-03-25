import { ComponentMeta, ComponentStory } from '@storybook/react';
import Ribbon from './Ribbon';

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: '30% OFF'
    }
  }
} as ComponentMeta<typeof Ribbon>;

export const Basic: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#5DADE2'
    }}
  >
    <Ribbon {...args} />
  </div>
);
