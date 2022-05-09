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
        <S.BannerBlockContent>
          <Logo id='banner' />

          <div>
            <Heading>All your favorite games in one place</Heading>
            <S.BannerSubtitle>
              <strong>WON</strong> is the best and most complete gaming platform
            </S.BannerSubtitle>
          </div>

          <S.BannerFooter>Won Games 2020 © Todos os Direitos Reservados</S.BannerFooter>
        </S.BannerBlockContent>
      </S.BannerBlock>

      <S.ContentBlock>
        <S.Content>
          <Logo color='black' size='large' id='content' />
          <Heading color='black' lineLeft lineColor='secondary'>
            {title}
          </Heading>

          {children}
        </S.Content>
      </S.ContentBlock>
    </S.Wrapper>
  );
}
