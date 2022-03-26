import * as S from './Highlight.styles';
import { Button } from 'components';

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
};

/**
 * Component used to hightlight a game on the website
 */
export default function Highlight({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage
}: HighlightProps) {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as='a' href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
}
