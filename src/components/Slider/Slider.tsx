import { forwardRef } from 'react';
import SlickSlider, { Settings } from 'react-slick';

import * as S from './Slider.styles';

export type SliderSettings = Settings;
export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

/**
 * Component that will be a boilerplate to use a slider
 */
const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default forwardRef(Slider);
