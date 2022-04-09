import Checkbox from './Checkbox';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';
import theme from 'styles/theme';

describe('Component: Checkbox', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label='Keep me signed in' labelFor='keepSignedIn' />);

    // getting checkbox by its role
    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    // gettings checkbox by its label
    expect(screen.getByLabelText('Keep me signed in')).toBeInTheDocument();

    // getting label by its text
    expect(screen.getByText('Keep me signed in')).toHaveAttribute('for', 'keepSignedIn');
  });

  it("should not render a label if it's not specified", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.getByRole('checkbox').parentElement?.childElementCount).toBe(1);
  });

  it('should render label with white color by default', () => {
    renderWithTheme(<Checkbox label='Keep me signed in' labelFor='keepSignedIn' />);

    // getting label by its text
    expect(screen.getByText('Keep me signed in')).toHaveStyleRule('color', theme.colors.white);
  });

  it('should render label with black color when specified', () => {
    renderWithTheme(
      <Checkbox label='Keep me signed in' labelFor='keepSignedIn' labelColor='black' />
    );

    // getting label by its text
    expect(screen.getByText('Keep me signed in')).toHaveStyleRule('color', theme.colors.black);
  });
});
