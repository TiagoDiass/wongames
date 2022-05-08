import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: React.ElementType;
  disabled?: boolean;
} & ButtonTypes;

/**
 * Button component
 */
export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
