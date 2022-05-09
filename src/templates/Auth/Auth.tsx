import { Heading, Logo } from 'components';
import * as S from './Auth.styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

/**
 * Template: Auth - Used in the sign in and sign up page
 */
export default function Auth({ title, children }: AuthProps) {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo />

        <Heading>All your favorite games in one place</Heading>
        <S.BannerSubtitle>
          <strong>WON</strong> is the best and most complete gaming platform
        </S.BannerSubtitle>

        <S.BannerFooter>Won Games 2020 © Todos os Direitos Reservados</S.BannerFooter>
      </S.BannerBlock>

      <S.Content>
        <Logo color='black' size='large' />
        <Heading color='black' lineLeft lineColor='secondary'>
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.Wrapper>
  );
}
