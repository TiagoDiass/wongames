import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground } from 'utils/stories-utils';
import GameDetails from './GameDetails';
import GameDetailsMock from './GameDetails.mock';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    ...setStoryDefaultBackground('Dark')
  },
  args: GameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as ComponentMeta<typeof GameDetails>;

export const Basic: ComponentStory<typeof GameDetails> = (args) => (
  <div style={{ maxWidth: '130rem' }}>
    <GameDetails {...args} />
  </div>
);
