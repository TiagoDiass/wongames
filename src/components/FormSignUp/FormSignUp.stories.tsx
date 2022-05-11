import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormSignUp from './FormSignUp';

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as ComponentMeta<typeof FormSignUp>;

export const Basic: ComponentStory<typeof FormSignUp> = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
);
