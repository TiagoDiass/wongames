import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import Slider, { SliderSettings } from 'components/Slider/Slider';

import * as S from './Gallery.styles';

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label='next image' />,
  prevArrow: <ArrowLeft aria-label='previous image' />,

  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  images: GalleryImageProps[];
};

/**
 * Component that mixes the GameCard component with the Slider component
 */
export default function Gallery({ images }: GalleryProps) {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {images.map((image, index) => (
          <img
            key={`thumb-${index}`}
            role='button'
            src={image.src}
            alt={`Thumb - ${image.label}`}
          />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
