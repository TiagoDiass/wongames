import Banner from './Banner';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

describe('Component: Banner', () => {
  it('should render correctly', () => {
    const BANNER_PROPS = {
      img: 'https://source.unsplash.com/user/willianjusten/1042x580',
      title: 'Defy Death',
      subtitle: '<p>Play the new <strong>CrashLands</strong> season',
      buttonLabel: 'Buy now',
      buttonLink: '/games/defy-death'
    } as const;

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
});
