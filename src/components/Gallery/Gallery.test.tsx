import Gallery, { GalleryImageProps } from './Gallery';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should open the image modal when user clicks on a thumbnail', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');

    expect(modal).toHaveAttribute('aria-hidden', 'true');
    expect(modal).toHaveStyle({ opacity: 0, 'pointer-events': 'none' });

    userEvent.click(screen.getByRole('button', { name: `Thumb - ${images[0].label}` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
      expect(modal).toHaveStyle({ opacity: 1 });
    });
  });

  it('should close the image modal correctly', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');
    expect(modal).toHaveAttribute('aria-hidden', 'true');

    userEvent.click(screen.getByRole('button', { name: `Thumb - ${images[0].label}` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    userEvent.click(screen.getByRole('button', { name: 'Close image modal' }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
