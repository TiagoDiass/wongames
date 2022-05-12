import styled, { css } from 'styled-components';
import * as TextFieldStyles from 'components/TextField/TextField.styles';
import * as ButtonStyles from 'components/Button/Button.styles';

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const FormLinkWrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 4px;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: filter, ${theme.transition.fast};

      &:hover {
        filter: brightness(0.85);
      }
    }
  `}
`;
