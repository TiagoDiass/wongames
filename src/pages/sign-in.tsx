import Auth from 'templates/Auth/Auth';
import { FormSignIn } from 'components';

export default function SignIn() {
  return (
    <Auth title='Sign in'>
      <FormSignIn />
    </Auth>
  );
}
