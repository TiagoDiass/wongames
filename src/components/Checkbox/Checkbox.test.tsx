import Checkbox from './Checkbox';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import theme from 'styles/theme';
import userEvent from '@testing-library/user-event';

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

  it('should dispatch onCheck with the correct values when checkbox state changes', async () => {
    const onCheckMock = jest.fn();

    renderWithTheme(
      <Checkbox label='Keep me signed in' labelFor='keepSignedIn' onCheck={onCheckMock} />
    );

    expect(onCheckMock).not.toHaveBeenCalled();

    // checking
    userEvent.click(screen.getByLabelText('Keep me signed in'));

    await waitFor(() => {
      expect(onCheckMock).toHaveBeenCalledTimes(1);
      expect(onCheckMock).toHaveBeenCalledWith(true);
    });

    // unchecking
    userEvent.click(screen.getByLabelText('Keep me signed in'));

    await waitFor(() => {
      expect(onCheckMock).toHaveBeenCalledTimes(2);
      expect(onCheckMock).toHaveBeenNthCalledWith(2, false);
    });
  });

  it('should render unchecked by default', () => {
    renderWithTheme(<Checkbox label='Keep me signed in' labelFor='keepSignedIn' />);

    expect(screen.getByLabelText('Keep me signed in')).not.toBeChecked();
  });

  it('should render checked if isChecked is specified', () => {
    renderWithTheme(<Checkbox label='Keep me signed in' labelFor='keepSignedIn' isChecked />);

    expect(screen.getByLabelText('Keep me signed in')).toBeChecked();
  });

  it('should gets checked when user checks', async () => {
    renderWithTheme(<Checkbox label='Keep me signed in' labelFor='keepSignedIn' />);

    userEvent.click(screen.getByLabelText('Keep me signed in'));

    await waitFor(() => {
      expect(screen.getByLabelText('Keep me signed in')).toBeChecked();
    });
  });

  it('should be accessible with the tab key', async () => {
    renderWithTheme(<Checkbox label='Checkbox label' labelFor='checkbox' />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText('Checkbox label')).toHaveFocus();
  });
});
