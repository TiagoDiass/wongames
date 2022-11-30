import { FormWrapper, FormLinkWrapper } from 'components/Form/Form';
import { Button, TextField } from 'components';
import { useValidationSchema } from './FormSignUp.validation';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  AccountCircle as AccountCircleIcon
} from 'styled-icons/material-outlined';

import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

/**
 * Sign up form
 */
export default function FormSignUp() {
  const validationSchema = useValidationSchema();

  const { formState, control } = useForm<SignUpForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },

    mode: 'onChange',

    resolver: validationSchema
  });

  return (
    <FormWrapper>
      <form>
        <Controller
          name='name'
          control={control}
          render={({ field, formState }) => (
            <TextField
              name='name'
              placeholder='Name'
              icon={<AccountCircleIcon />}
              onInput={field.onChange}
              error={formState.errors.name?.message}
            />
          )}
        />

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
              error={formState.errors.password?.message}
            />
          )}
        />

        <Controller
          name='confirmPassword'
          control={control}
          render={({ field, formState }) => (
            <TextField
              name='confirmPassword'
              placeholder='Confirm password'
              type='password'
              icon={<LockIcon />}
              onInput={field.onChange}
              error={formState.errors.confirmPassword?.message}
            />
          )}
        />

        <Button size='large' fullWidth disabled={!formState.isValid}>
          Sign up now
        </Button>

        <FormLinkWrapper>
          Already have an account?
          <Link href='/sign-in'>
            <a>Sign in</a>
          </Link>
        </FormLinkWrapper>
      </form>
    </FormWrapper>
  );
}
