import styled, { css } from 'styled-components';
import * as HeadingStyles from 'components/Heading/Heading.styles';
import * as LogoStyles from 'components/Logo/Logo.styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url('/img/grand-theft-auto.jpg');
    background-size: cover;
    background-position: center center;

    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge} ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    ::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: ${theme.colors.black};
      opacity: 0.7;
    }
  `}
`;

export const BannerBlockContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};

    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
  `}
`;

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    align-self: end;
    text-align: center;
  `}
`;

export const ContentBlock = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const Content = styled.main`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
