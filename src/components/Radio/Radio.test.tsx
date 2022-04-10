import Radio from './Radio';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import theme from 'styles/theme';
import userEvent from '@testing-library/user-event';

describe('Component: Radio', () => {
  it('should render correctly with a label', () => {
    renderWithTheme(<Radio label='Masculino' labelFor='male' />);

    // getting radio by its role
    expect(screen.getByRole('radio')).toBeInTheDocument();

    // getting radio by its label
    expect(screen.getByLabelText('Masculino')).toBeInTheDocument();

    // getting label by its text
    expect(screen.getByText('Masculino')).toBeInTheDocument();
  });

  it('should render label with white color by default', () => {
    renderWithTheme(<Radio label='Masculino' labelFor='male' />);

    // getting label by its text
    expect(screen.getByText('Masculino')).toHaveStyleRule('color', theme.colors.white);
  });

  it('should render label with black color when specified', () => {
    renderWithTheme(<Radio label='Masculino' labelFor='male' labelColor='black' />);

    // getting label by its text
    expect(screen.getByText('Masculino')).toHaveStyleRule('color', theme.colors.black);
  });

  it('should dispatch onCheck with the correct value when radio is checked', async () => {
    const onCheckMock = jest.fn();
    const radioValue = 'male';

    renderWithTheme(
      <Radio label='Masculino' labelFor='male' onCheck={onCheckMock} value={radioValue} />
    );

    expect(onCheckMock).not.toHaveBeenCalled();

    // checking
    userEvent.click(screen.getByLabelText('Masculino'));

    await waitFor(() => {
      expect(onCheckMock).toHaveBeenCalledTimes(1);
      expect(onCheckMock).toHaveBeenCalledWith(radioValue);
    });
  });

  it('should gets checked when user checks', async () => {
    renderWithTheme(<Radio label='Masculino' labelFor='male' />);

    userEvent.click(screen.getByLabelText('Masculino'));

    await waitFor(() => {
      expect(screen.getByLabelText('Masculino')).toBeChecked();
    });
  });

  it('should be accessible with the tab key', async () => {
    renderWithTheme(<Radio label='Masculino' labelFor='male' />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText('Masculino')).toHaveFocus();
  });
});
