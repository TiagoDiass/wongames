import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddShoppingCart } from 'styled-icons/material-outlined';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      defaultValue: 'Button'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const withIcon: ComponentStory<typeof Button> = (args) => <Button {...args} />;
withIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />
};

export const asLink: ComponentStory<typeof Button> = (args) => <Button {...args} />;
asLink.storyName = 'As a Link';
asLink.args = {
  as: 'a',
  href: 'https://www.example.com',
  target: '_blank',
  children: 'Sign in'
};
