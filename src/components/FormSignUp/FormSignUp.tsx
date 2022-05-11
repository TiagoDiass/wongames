import { Button, TextField } from 'components';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  AccountCircle as AccountCircleIcon
} from 'styled-icons/material-outlined';

import * as S from './FormSignUp.styles';
import Link from 'next/link';

/**
 * Sign up form
 */
export default function FormSignUp() {
  return (
    <S.Wrapper>
      <form>
        <TextField name='name' placeholder='Name' icon={<AccountCircleIcon />} />
        <TextField name='email' placeholder='Email' type='email' icon={<EmailIcon />} />
        <TextField name='password' placeholder='Password' type='password' icon={<LockIcon />} />
        <TextField
          name='confirmPassword'
          placeholder='Confirm password'
          type='password'
          icon={<LockIcon />}
        />

        <Button size='large' fullWidth>
          Sign up now
        </Button>

        <S.FormLinkWrapper>
          Already have an account?
          <Link href='/sign-in'>
            <a>Sign in</a>
          </Link>
        </S.FormLinkWrapper>
      </form>
    </S.Wrapper>
  );
}
