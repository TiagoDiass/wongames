import * as S from './Menu.styles';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from 'styled-icons/material-outlined';
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import { Logo } from 'components';
import { useState } from 'react';

/**
 * Component that contains the website menu
 */
export default function Menu() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const handleOpenFullMenu = () => setIsFullMenuOpen(true);
  const handleCloseFullMenu = () => setIsFullMenuOpen(false);

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label='Open menu' onClick={handleOpenFullMenu} />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label='Search' />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label='Open your Shopping Cart' />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isFullMenuOpen} isMenuOpen={isFullMenuOpen}>
        <S.IconWrapper>
          <CloseIcon aria-label='Close menu' onClick={handleCloseFullMenu} />
        </S.IconWrapper>
      </S.MenuFull>
    </S.Wrapper>
  );
}
