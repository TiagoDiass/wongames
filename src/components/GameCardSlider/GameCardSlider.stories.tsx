import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameCardSlider from './GameCardSlider';
import GameCardSliderMock from './GameCardSlider.mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Dark'
    }
  },
  argTypes: {
    games: {
      type: 'symbol'
    }
  },
  args: {
    arrowsColor: 'black'
  }
} as ComponentMeta<typeof GameCardSlider>;

export const Basic: ComponentStory<typeof GameCardSlider> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '2rem auto' }}>
    <GameCardSlider {...args} games={GameCardSliderMock} />
  </div>
);
