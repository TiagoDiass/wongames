import Highlight, { HighlightProps } from './Highlight';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const HIGHLIGHT_PROPS: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/rdr2'
} as const;

describe('Component: Highlight', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...HIGHLIGHT_PROPS} />);

    expect(screen.getByRole('heading', { name: HIGHLIGHT_PROPS.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: HIGHLIGHT_PROPS.subtitle })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Buy now' })).toBeInTheDocument();
  });
});
