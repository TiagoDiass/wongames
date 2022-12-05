import RichTextContent from './RichTextContent';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('Component: RichTextContent', () => {
  it('should render correctly', () => {
    const content = `
      <h2>Example heading from content</h2>
    `;

    renderWithTheme(<RichTextContent title='Example title' content={content} />);

    expect(screen.getByRole('heading', { name: 'Example title' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Example heading from content' })
    ).toBeInTheDocument();
  });
});
