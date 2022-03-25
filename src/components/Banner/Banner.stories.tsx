import { ComponentMeta, ComponentStory } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    // img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    img: 'https://images.unsplash.com/photo-1604818659418-1c53672b00f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=580&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3liZXJwdW5rfHx8fHx8MTY0ODE2NTgwMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1042',
    title: 'Defy Death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Banner>;

export const Basic: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;
