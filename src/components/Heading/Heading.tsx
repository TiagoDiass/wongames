import * as S from './Heading.styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

/**
 * Component that contains a heading text
 */
export default function Heading({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) {
  return (
    <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </S.Wrapper>
  );
}
