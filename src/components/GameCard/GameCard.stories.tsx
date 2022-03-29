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
  },
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  }
} as ComponentMeta<typeof GameCard>;

export const Basic: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const Promotional: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

Promotional.storyName = 'Promotional price';
Promotional.args = {
  title: 'Resident Evil 3',
  developer: 'Capcom',
  image: '/img/resident-evil-gamecard.png',
  promotionalPrice: '$150,00'
};
