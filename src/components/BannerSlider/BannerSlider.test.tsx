import 'match-media-mock';
import BannerSlider from './BannerSlider';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: BannerSlider', () => {
  it('should render correctly', () => {
    renderWithTheme(<BannerSlider banners={[]} />);
  });
});
