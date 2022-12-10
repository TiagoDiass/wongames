import Base from 'templates/Base/Base';

import { GameInfo, Gallery, RichTextContent } from 'components';
import { GameInfoProps } from 'components/GameInfo/GameInfo';
import { GalleryImageProps } from 'components/Gallery/Gallery';

import * as S from './Game.styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
};

export default function Game({ cover, gameInfo, gallery, description }: GameTemplateProps) {
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
      </S.Main>
    </Base>
  );
}
