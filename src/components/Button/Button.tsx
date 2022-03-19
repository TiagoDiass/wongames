import React from 'react';
import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Button component
 */
export default function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
