import FormSignIn from './FormSignIn';
import { renderWithTheme } from 'utils/test-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component: FormSignIn', () => {
  it('should render correctly (fields and secondary links)', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign in now' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Forgot your password?' })).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should start with submit button disabled', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('button', { name: 'Sign in now' })).toBeDisabled();
  });

  it('should enable submit button when user fill in the form', async () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('button', { name: 'Sign in now' })).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText('Email'), 'teste@teste.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'senha123');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Sign in now' })).toBeEnabled();
    });
  });
});
