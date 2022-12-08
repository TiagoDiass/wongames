import Gallery, { GalleryImageProps } from './Gallery';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/test-utils';

const images: GalleryImageProps[] = [
  {
    src: '/img/games/cyberpunk-1.jpeg',
    label: 'Gallery Image 1'
  },
  {
    src: '/img/games/cyberpunk-2.jpeg',
    label: 'Gallery Image 2'
  }
];

describe('Component: Gallery', () => {
  it('should render thumbnails as buttons correctly with the correct src', () => {
    renderWithTheme(<Gallery images={images} />);

    expect(screen.getByRole('button', { name: `Thumb - ${images[0].label}` })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: `Thumb - ${images[0].label}` })).toHaveAttribute(
      'src',
      images[0].src
    );

    expect(screen.getByRole('button', { name: `Thumb - ${images[1].label}` })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: `Thumb - ${images[1].label}` })).toHaveAttribute(
      'src',
      images[1].src
    );
  });
});
