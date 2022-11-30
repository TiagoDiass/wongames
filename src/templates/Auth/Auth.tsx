import { Heading, Logo } from 'components';
import Link from 'next/link';
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
          <Link href='/'>
            <a>
              <Logo id='banner' />
            </a>
          </Link>

          <div>
            <Heading size='huge'>All your favorite games in one place</Heading>
            <S.BannerSubtitle>
              <strong>WON</strong> is the best and most complete gaming platform
            </S.BannerSubtitle>
          </div>

          <S.BannerFooter>© 2020 Won Games, all rights reserved.</S.BannerFooter>
        </S.BannerBlockContent>
      </S.BannerBlock>

      <S.ContentBlock>
        <S.Content>
          <Link href='/'>
            <a>
              <Logo id='content' color='black' size='large' />
            </a>
          </Link>

          <Heading color='black' lineLeft lineColor='secondary'>
            {title}
          </Heading>

          {children}
        </S.Content>
      </S.ContentBlock>
    </S.Wrapper>
  );
}
