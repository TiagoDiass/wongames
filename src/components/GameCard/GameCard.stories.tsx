import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameCard from './GameCard';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    image: '/img/red-dead-gamecard.png',
    price: '$215,00'
  }
} as ComponentMeta<typeof GameCard>;

export const Basic: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);
