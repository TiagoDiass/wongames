import * as S from './Home.styles';
import {
  Container,
  Menu,
  Footer,
  Heading,
  BannerSlider,
  GameCardSlider,
  Highlight
} from 'components';

import { BannerSliderProps } from 'components/BannerSlider/BannerSlider';
import { GameCardSliderProps } from 'components/GameCardSlider/GameCardSlider';
import { HighlightProps } from 'components/Highlight/Highlight';

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
 * Page: Home
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
    <section>
      <Container>
        <Menu />

        <S.SectionBanner>
          <BannerSlider banners={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNewGames>
        <Container>
          <Heading lineLeft lineColor='secondary'>
            New
          </Heading>

          <GameCardSlider games={newGames} arrowsColor='black' />
        </Container>
      </S.SectionNewGames>

      <Container>
        <S.SectionMostPopulars>
          <Heading lineLeft lineColor='secondary'>
            Most Populars
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider games={mostPopularGames} />
        </S.SectionMostPopulars>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor='secondary'>
            Upcoming
          </Heading>

          <GameCardSlider games={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider games={upcomingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor='secondary'>
            Free Games
          </Heading>

          <Highlight {...freeGamesHighlight} />
          <GameCardSlider games={freeGames} arrowsColor='white' />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}
