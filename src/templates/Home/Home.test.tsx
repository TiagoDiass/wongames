import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import BannerSliderMock from 'components/BannerSlider/BannerSlider.mock';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';

const getHeading = (headingName: string) => screen.getByRole('heading', { name: headingName });

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

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // footer
    expect(getHeading('Contact')).toBeInTheDocument();

    // sections
    expect(getHeading('New')).toBeInTheDocument();
    expect(getHeading('Most Populars')).toBeInTheDocument();
    expect(getHeading('Upcoming')).toBeInTheDocument();
    expect(getHeading('Free Games')).toBeInTheDocument();
  });
});
