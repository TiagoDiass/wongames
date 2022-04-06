import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameCard from './GameCard';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    image: '/img/red-dead-gamecard.png',
    price: '$215,00',
    favorite: false
  },
  argTypes: {
    onFavorite: {
      action: 'clicked'
    }
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
  title: 'Project Winter',
  developer: 'Other Ocean Group',
  image: '/img/project-winter-gamecard.png',
  price: '$70,00',
  promotionalPrice: '$40,00'
};

export const withRibbon: ComponentStory<typeof GameCard> = (args) => (
  <div
    style={{
      maxWidth: '30rem'
    }}
  >
    <GameCard {...args} />
  </div>
);

withRibbon.args = {
  title: 'Resident Evil 3',
  developer: 'Capcom',
  image: '/img/resident-evil-gamecard.png',
  price: '$200,00',
  promotionalPrice: '$100,00',
  ribbon: { children: '50% OFF', color: 'primary', size: 'small' }
};
