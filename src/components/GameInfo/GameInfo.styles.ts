import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/Ribbon.styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &::before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        top: ${theme.spacings.small};
        right: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
      }

      ${RibbonStyles.Wrapper}::before {
        border: none;
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacings.xxsmall};

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      column-gap: ${theme.spacings.xxsmall};
    `}
  `}
`;
