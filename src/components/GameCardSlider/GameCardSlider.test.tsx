import 'match-media-mock';
import GameCardSlider from './GameCardSlider';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: GameCardSlider', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCardSlider games={[]} />);
  });
});
