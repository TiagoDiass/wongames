import FormSignIn from './FormSignIn';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

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
});
