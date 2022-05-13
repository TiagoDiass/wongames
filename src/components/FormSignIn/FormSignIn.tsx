import { Button, TextField } from 'components';
import { FormLinkWrapper, FormWrapper } from 'components/Form/Form';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { Email as EmailIcon, Lock as LockIcon } from 'styled-icons/material-outlined';

import * as S from './FormSignIn.styles';
import { useValidationSchema } from './FormSignIn.validation';

type SignInForm = {
  email: string;
  password: string;
};

/**
 * Sign In Form
 */
export default function FormSignIn() {
  const validationSchema = useValidationSchema();

  const { formState, control } = useForm<SignInForm>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
    resolver: validationSchema
  });

  return (
    <FormWrapper>
      <form>
        <Controller
          name='email'
          control={control}
          render={({ field, formState }) => (
            <TextField
              name='email'
              placeholder='Email'
              type='email'
              icon={<EmailIcon />}
              onInput={field.onChange}
              value={field.value}
              error={formState.errors.email?.message}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field, formState }) => (
            <TextField
              name='password'
              placeholder='Password'
              type='password'
              icon={<LockIcon />}
              onInput={field.onChange}
              value={field.value}
              error={formState.errors.password?.message}
            />
          )}
        />

        <S.ForgotPasswordLink href='#'>Forgot your password?</S.ForgotPasswordLink>

        <Button size='large' fullWidth type='button' disabled={!formState.isValid}>
          Sign in now
        </Button>

        <FormLinkWrapper>
          {"Don't have an account?"}
          <Link href='/sign-up'>
            <a>Sign up</a>
          </Link>
        </FormLinkWrapper>
      </form>
    </FormWrapper>
  );
}
