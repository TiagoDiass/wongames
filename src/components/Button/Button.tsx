import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';
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
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    icon,
    disabled = false,
    ...rest
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      ref={ref}
      {...rest}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default forwardRef(Button);
