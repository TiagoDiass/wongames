import Gallery from './Gallery';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Gallery', () => {
  it('should render correctly', () => {
    renderWithTheme(<Gallery images={[]} />);
  });
});
