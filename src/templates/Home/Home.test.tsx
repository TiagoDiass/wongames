import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import BannerSliderMock from 'components/BannerSlider/BannerSlider.mock';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';
import React from 'react';

jest.mock('components/Menu/Menu', () => ({
  __esModule: true,
  default: () => <div data-testid='menu-mock' />
}));

jest.mock('components/BannerSlider/BannerSlider', () => ({
  __esModule: true,
  default: () => <div data-testid='bannerslider-mock' />
}));

jest.mock('components/Showcase/Showcase', () => ({
  __esModule: true,
  default: () => <div data-testid='showcase-mock' />
}));

jest.mock('components/Footer/Footer', () => ({
  __esModule: true,
  default: () => <div data-testid='footer-mock' />
}));

const renderComponent = () => {
  const props = {
    banners: BannerSliderMock,
    newGames: [GameCardSliderMock[0], GameCardSliderMock[1]],
    mostPopularHighlight: HighlightMock,
    mostPopularGames: [GameCardSliderMock[0], GameCardSliderMock[1]],
    upcomingGames: [GameCardSliderMock[0], GameCardSliderMock[1]],
    upcomingHighlight: HighlightMock,
    upcomingMoreGames: [GameCardSliderMock[0], GameCardSliderMock[1]],
    freeGamesHighlight: HighlightMock,
    freeGames: [GameCardSliderMock[0], GameCardSliderMock[1]]
  };

  renderWithTheme(<Home {...props} />);
};

describe('Component: Home', () => {
  it('should render menu, footer and sections', () => {
    renderComponent();

    expect(screen.getByTestId('menu-mock')).toBeInTheDocument();
    expect(screen.getByTestId('bannerslider-mock')).toBeInTheDocument();
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
    expect(screen.getAllByTestId('showcase-mock')).toHaveLength(5);
  });
});
