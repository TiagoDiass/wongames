import styled, { css } from 'styled-components';
import { TextFieldProps } from './TextField';

export const Wrapper = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

const inputWrapperModifiers = {
  iconOnRight: () => css`
    flex-direction: row-reverse;
  `
};

type InputWrapperProps = Pick<TextFieldProps, 'iconPosition'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    transition: all ${theme.transition.default};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${iconPosition === 'right' && inputWrapperModifiers.iconOnRight()}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`;
