import Base from 'templates/Base/Base';
import * as S from './Game.styles';

export default function Game() {
  return (
    <Base>
      <S.Cover role='img' src='/img/games/cyberpunk-6.jpeg' aria-label='Cover' />
    </Base>
  );
}
