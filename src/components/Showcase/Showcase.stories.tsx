import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';
import { setStoryDefaultBackground } from 'utils/stories-utils';
import Showcase from './Showcase';

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [(Story) => <div style={{}}>{Story()}</div>],

  parameters: {
    ...setStoryDefaultBackground('Dark')
  }
} as ComponentMeta<typeof Showcase>;

export const Basic: ComponentStory<typeof Showcase> = (args) => <Showcase {...args} />;
Basic.args = {
  title: 'Most Popular',
  highlightProps: HighlightMock,
  games: GameCardSliderMock
};

export const WithoutHighlight: ComponentStory<typeof Showcase> = (args) => <Showcase {...args} />;
WithoutHighlight.args = {
  title: 'Most Popular',
  games: GameCardSliderMock
};

export const WithoutGames: ComponentStory<typeof Showcase> = (args) => <Showcase {...args} />;
WithoutGames.args = {
  title: 'Most Popular',
  highlightProps: HighlightMock
};
