import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/test-utils';
import TextField from './TextField';

describe('<TextField />', () => {
  it('should render correctly with Label', () => {
    renderWithTheme(<TextField label='Label' labelFor='Field' id='Field' />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render correctly without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('should render correctly with placeholder', () => {
    renderWithTheme(<TextField placeholder='Type your email in here' />);

    expect(screen.getByPlaceholderText('Type your email in here')).toBeInTheDocument();
  });

  it('should call props.onInput correctly when input value changes', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField onInput={onInput} label='TextField' labelFor='TextField' id='TextField' />
    );

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenLastCalledWith(text);
  });

  it('should be accessible with the tab key', () => {
    renderWithTheme(<TextField label='TextField' labelFor='TextField' id='TextField' />);

    const input = screen.getByLabelText('TextField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
