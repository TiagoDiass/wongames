import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Home', () => {
  it('should render correctly', () => {
    renderWithTheme(<Home />);
  });
});
