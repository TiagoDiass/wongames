import * as S from './Slider.styles';
import SlickSlider, { Settings } from 'react-slick';

export type SliderSettings = Settings;
export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

/**
 * Component that will be a boilerplate to use a slider
 */
export default function Slider({ children, settings }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
}
