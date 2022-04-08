import BannerSliderMock from 'components/BannerSlider/BannerSlider.mock';
import GameCardSliderMock from 'components/GameCardSlider/GameCardSlider.mock';
import HighlightMock from 'components/Highlight/Highlight.mock';
import { GetServerSideProps } from 'next';
import HomeTemplate, { HomeTemplateProps } from 'templates/Home/Home';

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps<HomeTemplateProps> = async () => {
  return {
    props: {
      banners: BannerSliderMock,
      newGames: GameCardSliderMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GameCardSliderMock,
      upcomingGames: GameCardSliderMock,
      upcomingHighlight: HighlightMock,
      upcomingMoreGames: GameCardSliderMock,
      freeGamesHighlight: HighlightMock,
      freeGames: GameCardSliderMock
    }
  };
};
