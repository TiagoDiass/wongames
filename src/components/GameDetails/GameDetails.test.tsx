import GameDetails, { GameDetailsProps } from './GameDetails';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

const getHeading = (headingName: string) => screen.getByRole('heading', { name: headingName });

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'Walkabout',
  rating: 'BR0',
  genres: ['Action', 'Adventure']
};

describe('Component: GameDetails', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(getHeading('Developer')).toBeInTheDocument();
    expect(screen.getByText('Different Tales')).toBeInTheDocument();

    expect(getHeading('Release Date')).toBeInTheDocument();
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();

    expect(getHeading('Platforms')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Windows' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Linux' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Mac' })).toBeInTheDocument();

    expect(getHeading('Publisher')).toBeInTheDocument();
    expect(screen.getByText('Walkabout')).toBeInTheDocument();

    expect(getHeading('Rating')).toBeInTheDocument();
    expect(screen.getByLabelText('Game rating')).toHaveTextContent('FREE');

    expect(getHeading('Genres')).toBeInTheDocument();
    expect(screen.getByLabelText('Game genres')).toHaveTextContent('Action / Adventure');
  });

  describe('formatted rating renderization', () => {
    it('should render correctly with rating BR0', () => {
      renderWithTheme(<GameDetails {...props} rating='BR0' />);
      expect(screen.getByLabelText('Game rating')).toHaveTextContent('FREE');
    });

    it('should render correctly with rating BR14', () => {
      renderWithTheme(<GameDetails {...props} rating='BR14' />);
      expect(screen.getByLabelText('Game rating')).toHaveTextContent('14+');
    });
  });
});
