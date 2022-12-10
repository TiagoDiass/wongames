import Base from 'templates/Base/Base';
import * as S from './Game.styles';

export type GameTemplateProps = {
  cover: string;
};

export default function Game({ cover }: GameTemplateProps) {
  return (
    <Base>
      <S.Cover role='img' src={cover} aria-label='Cover' />
    </Base>
  );
}
