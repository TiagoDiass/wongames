// import * as S from './Home.styles';
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
        <BannerSlider banners={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor='secondary' color='black'>
          New
        </Heading>

        <GameCardSlider games={newGames} arrowsColor='black' />
      </Container>

      <Container>
        <Heading lineLeft lineColor='secondary'>
          Most Populars
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider games={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor='secondary'>
          Upcoming
        </Heading>

        <GameCardSlider games={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider games={upcomingMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor='secondary'>
          Free Games
        </Heading>

        <Highlight {...freeGamesHighlight} />
        <GameCardSlider games={freeGames} arrowsColor='white' />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
