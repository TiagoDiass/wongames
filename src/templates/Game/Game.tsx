import Base from 'templates/Base/Base';

import { GameInfo, Gallery, RichTextContent, GameDetails, Showcase } from 'components';
import { GameInfoProps } from 'components/GameInfo/GameInfo';
import { GalleryImageProps } from 'components/Gallery/Gallery';
import { GameDetailsProps } from 'components/GameDetails/GameDetails';
import { GameCardProps } from 'components/GameCard/GameCard';
import { HighlightProps } from 'components/Highlight/Highlight';

import * as S from './Game.styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

export default function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) {
  return (
    <Base>
      <S.Cover role='img' src={cover} aria-label='Cover' />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>{!!gallery && <Gallery images={gallery} />}</S.SectionGallery>

        <S.SectionDescription>
          <RichTextContent title='Description' content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...details} />
        </S.SectionGameDetails>

        <Showcase title='Upcoming' games={upcomingGames} highlightProps={upcomingHighlight} />

        <Showcase title='You may like these games' games={recommendedGames} />
      </S.Main>
    </Base>
  );
}
