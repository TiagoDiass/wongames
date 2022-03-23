import Footer from './Footer';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const getHeading = (headingName: string) => screen.getByRole('heading', { name: headingName });

describe('Component: Footer', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />);

    expect(getHeading('Contact')).toBeInTheDocument();
    expect(getHeading('Follow us')).toBeInTheDocument();
    expect(getHeading('Links')).toBeInTheDocument();
    expect(getHeading('Location')).toBeInTheDocument();
  });
});
