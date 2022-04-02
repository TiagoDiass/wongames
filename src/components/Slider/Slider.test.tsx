import 'match-media-mock';
import Slider from './Slider';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('Component: Slider', () => {
  it('should render children as slider item', () => {
    const { container } = renderWithTheme(
      <Slider
        settings={{
          slidesToShow: 1,
          infinite: false
        }}
      >
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    );

    expect(screen.getByText('Item 1').parentElement?.parentElement).toHaveClass('slick-slide');
    expect(screen.getByText('Item 2').parentElement?.parentElement).toHaveClass('slick-slide');

    expect(container.firstChild).toMatchSnapshot();
  });
});
