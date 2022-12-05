import FormSignUp from './FormSignUp';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: FormSignUp', () => {
  it('should render correctly (fields and secondary links)', () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up now' })).toBeInTheDocument();
    expect(screen.getByText('Already have an account?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should start with submit button disabled', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('button', { name: 'Sign up now' })).toBeDisabled();
  });

  it('should enable submit button when user fill in the form correctly', async () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole('button', { name: 'Sign up now' })).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText('Name'), 'Jonathan Doe');
    userEvent.type(screen.getByPlaceholderText('Email'), 'example.email@example.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'good-password');
    userEvent.type(screen.getByPlaceholderText('Confirm password'), 'good-password');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Sign up now' })).toBeEnabled();
    });
  });
});
