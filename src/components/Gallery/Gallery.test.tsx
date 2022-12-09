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

  it('should open the image modal with the correct image', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');

    expect(modal).toHaveAttribute('aria-hidden', 'true');

    // clicking on the second tumb
    userEvent.click(screen.getByRole('button', { name: `Thumb - Gallery Image 2` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    const currentImage = await screen.findByRole('img', { name: 'Gallery Image 2' });

    // expect the second image is the active on slick-slider
    expect(currentImage.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should close the image modal correctly when user clicks on button or modal overlay', async () => {
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

  it('should close the image modal correctly when user press the ESC key', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');
    expect(modal).toHaveAttribute('aria-hidden', 'true');

    userEvent.click(screen.getByRole('button', { name: `Thumb - ${images[0].label}` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('should navigate to the next image in modal when user press the ArrowRight key', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');
    // clicking on the first tumb
    userEvent.click(screen.getByRole('button', { name: `Thumb - Gallery Image 1` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    const firstImage = await screen.findByRole('img', { name: 'Gallery Image 1' });

    // expect the first image is the active on slick-slider
    expect(firstImage.parentElement?.parentElement).toHaveClass('slick-active');

    userEvent.keyboard('{ArrowRight}');

    const secondImage = await screen.findByRole('img', { name: 'Gallery Image 2' });

    // expect the second image is the active on slick-slider
    expect(secondImage.parentElement?.parentElement).toHaveClass('slick-active');
  });

  it('should navigate back to the previous image in modal when user press the ArrowLeft key', async () => {
    renderWithTheme(<Gallery images={images} />);

    const modal = screen.getByLabelText('Image modal');
    // clicking on the second tumb
    userEvent.click(screen.getByRole('button', { name: `Thumb - Gallery Image 2` }));

    await waitFor(() => {
      expect(modal).toHaveAttribute('aria-hidden', 'false');
    });

    const secondImage = await screen.findByRole('img', { name: 'Gallery Image 2' });

    // expect the second image is the active on slick-slider
    expect(secondImage.parentElement?.parentElement).toHaveClass('slick-active');

    userEvent.keyboard('{ArrowLeft}');

    const firstImage = await screen.findByRole('img', { name: 'Gallery Image 1' });

    // expect the first image is the active on slick-slider
    expect(firstImage.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
