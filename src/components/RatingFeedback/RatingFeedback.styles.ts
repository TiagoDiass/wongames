import * as ButtonStyles from 'components/Button/Button.styles';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.border.radius};
    border-radius: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 24px;

    ${ButtonStyles.Wrapper} {
      text-transform: uppercase;
    }
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const ScoreButtonsRow = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;
  `}
`;

export const ScoreButton = styled.label`
  ${({ theme }) => css`
    /* The container */
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Hide the browser's default radio button */
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;

      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};

      transition: ${theme.transition.fast};

      text-align: center;
      width: 5.2rem;
      height: 5.2rem;
      border-radius: 50%;

      &:hover {
        filter: brightness(0.9);
      }

      ${media.lessThan('small')`
        width: 4.3rem;
        height: 4.3rem;
        font-size: ${theme.font.sizes.small};
      `}
    }

    /* When the radio button is checked, add a blue background */
    input:checked ~ .checkmark {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`;
