import Highlight, { HighlightProps } from './Highlight';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const HIGHLIGHT_PROPS: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/rdr2',
  backgroundImage: '/img/example.jpg'
} as const;

describe('Component: Highlight', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);

    expect(screen.getByRole('heading', { name: HIGHLIGHT_PROPS.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: HIGHLIGHT_PROPS.subtitle })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument();
  });

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${HIGHLIGHT_PROPS.backgroundImage})`
    });
  });

  it('should render a float image', () => {
    renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} floatImage='/float-image.png' />);

    expect(screen.getByRole('img', { name: HIGHLIGHT_PROPS.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );
  });
});
