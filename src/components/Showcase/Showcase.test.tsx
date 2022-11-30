import 'match-media-mock';
import Showcase from './Showcase';
import { renderWithTheme } from 'utils/test-utils';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';
import { screen } from '@testing-library/react';

const showcaseProps = {
  title: 'Most Popular',
  highlightProps: HighlightMock,
  games: GameCardSliderMock.slice(0, 1) // takes only the first game
};

describe('Component: Showcase', () => {
  it('should render correctly with all showcase options', () => {
    renderWithTheme(<Showcase {...showcaseProps} />);

    expect(screen.getByRole('heading', { name: 'Most Popular' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: HighlightMock.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: GameCardSliderMock[0].title })).toBeInTheDocument();
  });

  it('should render correctly without title', () => {
    renderWithTheme(
      <Showcase highlightProps={showcaseProps.highlightProps} games={showcaseProps.games} />
    );

    expect(screen.queryByRole('heading', { name: 'Most Popular' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: HighlightMock.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: GameCardSliderMock[0].title })).toBeInTheDocument();
  });

  it('should render correctly without highlight', () => {
    renderWithTheme(<Showcase title={showcaseProps.title} games={showcaseProps.games} />);

    expect(screen.queryByRole('heading', { name: HighlightMock.title })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Most Popular' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: GameCardSliderMock[0].title })).toBeInTheDocument();
  });

  it('should render correctly without games', () => {
    renderWithTheme(
      <Showcase title={showcaseProps.title} highlightProps={showcaseProps.highlightProps} />
    );

    expect(
      screen.queryByRole('heading', { name: GameCardSliderMock[0].title })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Most Popular' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: HighlightMock.title })).toBeInTheDocument();
  });
});
