import { Button, TextField } from 'components';
import { FormLinkWrapper, FormWrapper } from 'components/Form/Form';
import Link from 'next/link';
import { Email as EmailIcon, Lock as LockIcon } from 'styled-icons/material-outlined';

import * as S from './FormSignIn.styles';

/**
 * Sign In Form
 */
export default function FormSignIn() {
  return (
    <FormWrapper>
      <form>
        <TextField name='email' placeholder='Email' type='email' icon={<EmailIcon />} />
        <TextField name='password' placeholder='Password' type='password' icon={<LockIcon />} />

        <S.ForgotPasswordLink href='#'>Forgot your password?</S.ForgotPasswordLink>

        <Button size='large' fullWidth>
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