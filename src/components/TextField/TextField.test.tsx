import TextField from './TextField';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: TextField', () => {
  it('should render correctly', () => {
    renderWithTheme(<TextField label='E-mail' initialValue='tiago@gmail.com' />);
  });
});
