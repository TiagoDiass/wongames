import FormSignUp from './FormSignUp';
import { renderWithTheme } from 'utils/test-utils';
import { screen } from '@testing-library/react';

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

  it.todo('should start with submit button disabled');

  it.todo('should enable submit button when user fill in the form');
});
