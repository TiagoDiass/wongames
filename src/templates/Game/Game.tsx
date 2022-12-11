import Base from 'templates/Base/Base';

import { GameInfo, Gallery, RichTextContent, GameDetails } from 'components';
import { GameInfoProps } from 'components/GameInfo/GameInfo';
import { GalleryImageProps } from 'components/Gallery/Gallery';
import { GameDetailsProps } from 'components/GameDetails/GameDetails';

import * as S from './Game.styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
};

export default function Game({
  cover,
  gameInfo,
  gallery,
  description,
  details
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
      </S.Main>
    </Base>
  );
}
