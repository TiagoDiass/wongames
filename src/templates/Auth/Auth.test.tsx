import Auth from './Auth';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const getHeading = (headingName: string) => screen.getByRole('heading', { name: headingName });

describe('Component: Auth', () => {
  it('should render all elements and children correctly', () => {
    renderWithTheme(
      <Auth title='Auth Title'>
        <input type='text' />
      </Auth>
    );

    expect(screen.getAllByRole('img', { name: 'Won Games' })).toHaveLength(2);
    expect(getHeading('All your favorite games in one place')).toBeInTheDocument();
    expect(getHeading('WON is the best and most complete gaming platform')).toBeInTheDocument();
    expect(screen.getByText('Won Games 2020 © Todos os Direitos Reservados')).toBeInTheDocument();

    expect(getHeading('Auth Title')).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
