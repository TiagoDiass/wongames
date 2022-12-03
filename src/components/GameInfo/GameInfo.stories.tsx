import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setStoryDefaultBackground } from 'utils/stories-utils';
import GameInfo from './GameInfo';
import GameInfoMock from './GameInfo.mock';

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  parameters: {
    ...setStoryDefaultBackground('Dark')
  },

  args: GameInfoMock
} as ComponentMeta<typeof GameInfo>;

export const Basic: ComponentStory<typeof GameInfo> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
);
