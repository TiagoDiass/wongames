import { useEffect, useRef, useState } from 'react';
import {
  Close as CloseIcon,
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined';
import SlickSlider from 'react-slick';

import Slider, { SliderSettings } from 'components/Slider/Slider';

import * as S from './Gallery.styles';

const baseSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label='next image' />,
  prevArrow: <ArrowLeft aria-label='previous image' />
};

const settings: SliderSettings = {
  ...baseSettings,
  slidesToShow: 4,

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

const imageModalSettings: SliderSettings = {
  ...baseSettings,
  slidesToShow: 1
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
  const sliderRef = useRef<SlickSlider>(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const openImageModal = (imageIndex: number) => {
    setIsImageModalOpen(true);
    sliderRef.current!.slickGoTo(imageIndex, true);
  };
  const closeImageModal = () => setIsImageModalOpen(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        closeImageModal();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [isImageModalOpen]);

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={settings}>
        {images.map((image, imageIndex) => (
          <img
            key={`thumb-${imageIndex}`}
            role='button'
            src={image.src}
            alt={`Thumb - ${image.label}`}
            onClick={() => openImageModal(imageIndex)}
          />
        ))}
      </Slider>

      <S.Modal aria-label='Image modal' aria-hidden={!isImageModalOpen} isOpen={isImageModalOpen}>
        <S.CloseModal role='button' aria-label='Close image modal' onClick={closeImageModal}>
          <CloseIcon size={40} />
        </S.CloseModal>

        <S.Content>
          <Slider ref={sliderRef} settings={imageModalSettings}>
            {images.map((image, index) => (
              <img key={`gallery-${index}`} src={image.src} alt={image.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
}
