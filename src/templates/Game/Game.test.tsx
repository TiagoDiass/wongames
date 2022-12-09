import Game from './Game';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Game', () => {
  it('should render correctly', () => {
    renderWithTheme(<Game />);
  });
});
