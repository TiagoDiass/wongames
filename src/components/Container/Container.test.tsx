import Container from './Container';
import { renderWithTheme } from 'utils/test-utils';
import theme from 'styles/theme';

describe('Component: Container', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.container);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
