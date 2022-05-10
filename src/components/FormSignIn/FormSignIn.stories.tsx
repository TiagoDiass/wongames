import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormSignIn from './FormSignIn';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as ComponentMeta<typeof FormSignIn>;

export const Basic: ComponentStory<typeof FormSignIn> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
);
