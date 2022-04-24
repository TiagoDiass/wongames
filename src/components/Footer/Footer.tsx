import * as S from './Footer.styles';
import Link from 'next/link';
import { Logo, Heading } from 'components';

/**
 * Component that contains the website footer
 */
export default function Footer() {
  return (
    <S.Wrapper>
      <Logo color='black' />

      <S.Content>
        <S.Column>
          <Heading color='black' size='small' lineBottom lineColor='secondary'>
            Contact
          </Heading>

          <a href='mailto:sac@wongames.com'>sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color='black' size='small' lineBottom lineColor='secondary'>
            Follow us
          </Heading>

          <nav aria-labelledby='social media'>
            <a href='https://instagram.com/won-games' target='_blank' rel='noopener, noreferrer'>
              Instagram
            </a>
            <a href='https://twitter.com/won-games' target='_blank' rel='noopener, noreferrer'>
              Twitter
            </a>
            <a href='https://youtube.com/won-games' target='_blank' rel='noopener, noreferrer'>
              Youtube
            </a>
            <a href='https://facebook.com/won-games' target='_blank' rel='noopener, noreferrer'>
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color='black' lineColor='secondary' lineBottom size='small'>
            Links
          </Heading>

          <nav aria-labelledby='footer resources'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/games'>
              <a>Store</a>
            </Link>
            <Link href='/search'>
              <a>Explore</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby='footer-contact'>
          <Heading color='black' lineColor='secondary' lineBottom size='small'>
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
}
