import Highlight, { HighlightProps } from './Highlight';
import * as S from './Highlight.styles';
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

  it('should render right aligned by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...HIGHLIGHT_PROPS} floatImage='/float-image.png' />
    );

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatimage content'");
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });
  });

  it('should render left aligned when specified', () => {
    const { container } = renderWithTheme(
      <Highlight {...HIGHLIGHT_PROPS} floatImage='/float-image.png' alignment='left' />
    );

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatimage'");
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });
  });
});
