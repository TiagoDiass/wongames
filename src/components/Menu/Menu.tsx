import * as S from './Menu.styles';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from 'styled-icons/material-outlined';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import { Logo, Button } from 'components';
import { useState } from 'react';
import { MediaMatch } from 'components';
import Link from 'next/link';

type MenuProps = {
  username?: string;
};

/**
 * Component that contains the website menu
 */
export default function Menu({ username }: MenuProps) {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const handleOpenFullMenu = () => setIsFullMenuOpen(true);
  const handleCloseFullMenu = () => setIsFullMenuOpen(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan='medium'>
        <S.IconWrapper>
          <MenuIcon aria-label='Open menu' onClick={handleOpenFullMenu} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href='/' passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan='medium'>
        <S.MenuNavigation>
          <Link href='/' passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href='#' passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNavigation>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label='Search' />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label='Open your Shopping Cart' />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan='medium'>
            <Link href='/sign-in' passHref>
              <Button size='medium' as='a'>
                Sign in
              </Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isFullMenuOpen} isMenuOpen={isFullMenuOpen}>
        <CloseIcon aria-label='Close menu' onClick={handleCloseFullMenu} />

        <S.MenuNavigation>
          <Link href='/' passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href='#' passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <S.MenuLink href='#'>My Account</S.MenuLink>
              <S.MenuLink href='#'>Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNavigation>

        {!username && (
          <S.RegisterBox>
            <Link href='/sign-in' passHref>
              <Button fullWidth size='large' as='a'>
                Log in now
              </Button>
            </Link>
            <span>or</span>

            <Link href='/sign-up' passHref>
              <S.SignUpLink title='Sign up'>Sign up</S.SignUpLink>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
}
