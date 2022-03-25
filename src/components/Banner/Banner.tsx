import * as S from './Banner.styles';
import { Button } from 'components';
import Ribbon, { RibbonProps } from 'components/Ribbon/Ribbon';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: RibbonProps;
};

/**
 * Component that will contain a Banner
 */
export default function Banner({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon
}: BannerProps) {
  return (
    <S.Wrapper>
      {!!ribbon && <Ribbon {...ribbon} />}

      <S.Image src={img} role='img' aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as='a' href={buttonLink} size='large'>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  );
}
