import styled, { css } from 'styled-components';
import { RadioProps } from './Radio';

export const xWrapper = styled.div<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 2.1rem;
      height: 2.1rem;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }

    label {
      color: ${theme.colors[labelColor!]};
      cursor: pointer;
      line-height: 2rem;
      padding-left: calc(2rem + ${theme.spacings.xxsmall});

      &::before {
        border: 2px solid ${theme.colors.primary};
        content: '';
        height: 2rem;
        left: 0;
        position: absolute;
        top: 0;
        width: 2rem;
        border-radius: 50%;
      }

      &::after {
        content: '';
        opacity: 0;
        border: 5px solid ${theme.colors.primary};
        border-radius: 50%;
        position: absolute;
        left: 5px;
        top: 5px;
        transition: opacity 0.2s ease-in-out;
      }
    }

    input:checked + label::after {
      opacity: 1;
    }

    /*focus styles*/
    input:focus + label::before {
      box-shadow: 0 0 0 2px ${theme.colors.primary};
      outline: 3px solid transparent; /* For Windows high contrast mode. */
    }
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      outline: 1px solid ${theme.colors.primary};
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`;
