import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

export const Basic: ComponentStory<typeof Footer> = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
);
