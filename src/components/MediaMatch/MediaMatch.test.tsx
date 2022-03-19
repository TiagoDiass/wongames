import MediaMatch from './MediaMatch';
import { render, screen } from '@testing-library/react';

describe('Component: MediaMatch', () => {
  let desktopHeading: Element;
  let mobileHeading: Element;

  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan='medium'>
          <h1 data-testid='desktop'>Desktop</h1>
        </MediaMatch>

        <MediaMatch lessThan='medium'>
          <h1 data-testid='mobile'>Mobile</h1>
        </MediaMatch>
      </>
    );

    desktopHeading = screen.getByTestId('desktop');
    mobileHeading = screen.getByTestId('mobile');
  });

  it('should be hidden if no media query is specified', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none');
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none');
  });

  it('should be shown or hidden based on the specified size', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    });

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    });
  });
});
