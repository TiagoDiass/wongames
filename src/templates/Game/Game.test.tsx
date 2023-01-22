import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/test-utils';
import Game, { GameTemplateProps } from './Game';
import GalleryMock from 'components/Gallery/Gallery.mock';
import GameInfoMock from 'components/GameInfo/GameInfo.mock';
import GameDetailsMock from 'components/GameDetails/GameDetails.mock';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';

const props: GameTemplateProps = {
  cover: 'fake-image.jpeg',
  gameInfo: GameInfoMock,
  gallery: GalleryMock.images,
  description: '<h1>Custom HTML</h1>',
  details: GameDetailsMock,
  upcomingGames: GameCardSliderMock,
  upcomingHighlight: HighlightMock,
  recommendedGames: GameCardSliderMock
};

jest.mock('components/Menu/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid='menu-mock' />
}));

jest.mock('components/Gallery/Gallery', () => ({
  __esModule: true,
  default: () => <div data-testid='gallery-mock' />
}));

jest.mock('components/GameDetails/GameDetails', () => ({
  __esModule: true,
  default: () => <div data-testid='game-details-mock' />
}));

jest.mock('components/GameInfo/GameInfo', () => ({
  __esModule: true,
  default: () => <div data-testid='game-info-mock' />
}));

jest.mock('components/Showcase/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid='showcase-mock' />
}));

describe('Page: Game', () => {
  it('should render correctly', () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId('gallery-mock')).toBeInTheDocument();
    expect(screen.getByTestId('game-details-mock')).toBeInTheDocument();
    expect(screen.getByTestId('game-info-mock')).toBeInTheDocument();
    expect(screen.getAllByTestId('showcase-mock')).toHaveLength(2);
    expect(screen.getByText('Custom HTML')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Cover' })).toHaveStyleRule(
      'background-image',
      'url(fake-image.jpeg)'
    );
  });

  it('should not render the gallery when game has no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId('gallery-mock')).not.toBeInTheDocument();
  });
});
