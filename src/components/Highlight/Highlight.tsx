import * as S from './Highlight.styles';
import { Button } from 'components';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

/**
 * Component used to hightlight a game on the website
 */
export default function Highlight({ title, subtitle, buttonLabel, buttonLink }: HighlightProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as='a' href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Wrapper>
  );
}
