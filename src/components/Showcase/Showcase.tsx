import * as S from './Showcase.styles';
import Heading from 'components/Heading/Heading';
import Highlight, { HighlightProps } from 'components/Highlight/Highlight';
import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider/GameCardSlider';

export type ShowcaseProps = {
  title?: string;
  highlightProps?: HighlightProps;
  games?: GameCardSliderProps['games'];
};

/**
 * Component composed of a heading, a highlight and a gameCardSlider, used as a showcase in multiple pages.
 */
export default function Showcase({ title, highlightProps, games }: ShowcaseProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor='secondary'>
          {title}
        </Heading>
      )}

      {!!highlightProps && <Highlight {...highlightProps} />}
      {!!games && <GameCardSlider games={games} />}
    </S.Wrapper>
  );
}
