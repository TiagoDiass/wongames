import { Heading, Logo } from 'components';
import * as S from './Auth.styles';

/**
 * Page: Auth
 */
export default function Auth() {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo />

        <Heading>All your favorite games in one place</Heading>
        <S.Subtitle>
          <strong>WON</strong> is the best and most complete gaming platform
        </S.Subtitle>
      </S.BannerBlock>

      <S.Content></S.Content>
    </S.Wrapper>
  );
}
