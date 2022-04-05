import { BannerProps } from 'components/Banner/Banner';
import Slider, { SliderSettings } from 'components/Slider/Slider';
import { Banner } from 'components';

import * as S from './BannerSlider.styles';

export type BannerSliderProps = {
  banners: BannerProps[];
  // settings: SliderSettings
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
};

/**
 * Component that mixes the Banner component with the Slider component
 */
export default function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {banners.map((bannerProps) => (
          <Banner key={bannerProps.title} {...bannerProps} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
