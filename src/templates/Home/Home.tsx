import * as S from './Home.styles';
import { Container, BannerSlider, Showcase } from 'components';

import { BannerSliderProps } from 'components/BannerSlider/BannerSlider';
import { GameCardSliderProps } from 'components/GameCardSlider/GameCardSlider';
import { HighlightProps } from 'components/Highlight/Highlight';
import Base from 'templates/Base/Base';

export type HomeTemplateProps = {
  banners: BannerSliderProps['banners'];
  newGames: GameCardSliderProps['games'];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardSliderProps['games'];
  upcomingGames: GameCardSliderProps['games'];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardSliderProps['games'];
  freeGamesHighlight: HighlightProps;
  freeGames: GameCardSliderProps['games'];
};

/**
 * Template: Home - used in the home page
 */
export default function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGamesHighlight,
  freeGames
}: HomeTemplateProps) {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider banners={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNewGames>
        <Showcase title='New' games={newGames} />
      </S.SectionNewGames>

      <Showcase
        title='Most Populars'
        highlightProps={mostPopularHighlight}
        games={mostPopularGames}
      />

      <S.SectionUpcoming>
        <Showcase title='Upcoming' games={upcomingGames} />
        <Showcase highlightProps={upcomingHighlight} games={upcomingMoreGames} />
      </S.SectionUpcoming>

      <Showcase title='Free Games' highlightProps={freeGamesHighlight} games={freeGames} />
    </Base>
  );
}
