import Home from './Home';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const getHeading = (headingName: string) => screen.getByRole('heading', { name: headingName });

xdescribe('Component: Home', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(getHeading('Contact')).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home />);

    expect(getHeading('New')).toBeInTheDocument();
    expect(getHeading('Most Populars')).toBeInTheDocument();
    expect(getHeading('Upcoming')).toBeInTheDocument();
    expect(getHeading('Free Games')).toBeInTheDocument();
  });
});
