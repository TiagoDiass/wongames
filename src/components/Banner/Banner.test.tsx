import Banner from './Banner';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

const BANNER_PROPS = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy Death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
} as const;

describe('Component: Banner', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...BANNER_PROPS} />);

    expect(screen.getByRole('heading', { name: BANNER_PROPS.title })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Play the new CrashLands season' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: BANNER_PROPS.buttonLabel })).toHaveAttribute(
      'href',
      BANNER_PROPS.buttonLink
    );
    expect(screen.getByRole('img', { name: BANNER_PROPS.title })).toHaveAttribute(
      'src',
      BANNER_PROPS.img
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...BANNER_PROPS}
        ribbon={{ children: 'My Ribbon', color: 'secondary', size: 'normal' }}
      />
    );

    const ribbonElement = screen.getByText('My Ribbon');

    expect(ribbonElement).toBeInTheDocument();
    expect(ribbonElement).toHaveStyle({
      // Ribbon color
      backgroundColor: theme.colors.secondary,

      // Ribbon size
      height: '3.6rem',
      fontSize: theme.font.sizes.small
    });
  });
});
