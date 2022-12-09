import { useState } from 'react';
import {
  Close as CloseIcon,
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined';

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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {images.map((image, index) => (
          <img
            key={`thumb-${index}`}
            role='button'
            src={image.src}
            alt={`Thumb - ${image.label}`}
            onClick={openImageModal}
          />
        ))}
      </Slider>

      <S.Modal aria-label='Image modal' aria-hidden={!isImageModalOpen} isOpen={isImageModalOpen}>
        <S.CloseModal role='button' aria-label='Close image modal' onClick={closeImageModal}>
          <CloseIcon size={40} />
        </S.CloseModal>
      </S.Modal>
    </S.Wrapper>
  );
}
