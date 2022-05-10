import { FormSignIn } from 'components';
import Auth from 'templates/Auth/Auth';

export default function SignIn() {
  return (
    <Auth title='Sign in'>
      <FormSignIn />
    </Auth>
  );
}
