import styled, { css } from 'styled-components';

export const ForgotPasswordLink = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      text-decoration: underline;
    }
  `}
`;
