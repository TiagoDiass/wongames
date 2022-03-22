import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
    display: flex;
    align-items: center;
    position: relative;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    column-gap: ${theme.spacings.xsmall};
  `}
`;

export const MenuNavigation = styled.div`
  ${media.greaterThan('medium')`
    margin-left: ${(p) => p.theme.spacings.small}
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }

        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

type MenuFullProps = {
  isMenuOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isMenuOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isMenuOpen ? '1' : '0'};

    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${isMenuOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease-in-out;

    > svg {
      color: ${theme.colors.black};
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNavigation} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};

      transform: ${isMenuOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isMenuOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const SignUpLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;
