import * as S from './Ribbon.styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'normal' | 'small';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

/**
 * Ribbon Component to show some cool information to the user
 */
export default function Ribbon({ children, color = 'primary', size = 'normal' }: RibbonProps) {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
}
