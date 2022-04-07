import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import { GameCardProps } from 'components/GameCard/GameCard';
import Slider, { SliderSettings } from 'components/Slider/Slider';
import { GameCard } from 'components';
import * as S from './GameCardSlider.styles';

export type GameCardSliderProps = {
  games: GameCardProps[];
  arrowsColor?: 'white' | 'black';
};

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label='next games' />,
  prevArrow: <ArrowLeft aria-label='previous games' />,

  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',

  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
};

/**
 * Component that mixes the GameCard component with the Slider component
 */
export default function GameCardSlider({ games, arrowsColor = 'black' }: GameCardSliderProps) {
  return (
    <S.Wrapper arrowsColor={arrowsColor}>
      <Slider settings={settings}>
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
