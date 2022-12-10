import Base from 'templates/Base/Base';

import { GameInfo } from 'components';
import { GameInfoProps } from 'components/GameInfo/GameInfo';

import * as S from './Game.styles';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps;
};

export default function Game({ cover, gameInfo }: GameTemplateProps) {
  return (
    <Base>
      <S.Cover role='img' src={cover} aria-label='Cover' />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>
      </S.Main>
    </Base>
  );
}
