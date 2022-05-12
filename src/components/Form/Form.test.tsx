import { FormWrapper, FormLinkWrapper } from './Form';
import { renderWithTheme } from 'utils/test-utils';

describe('Component: Form', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLinkWrapper>
          My nice <a href='#'>link</a>
        </FormLinkWrapper>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        color: #030517;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-column-gap: 4px;
        column-gap: 4px;
      }

      .c0 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: filter,0.1s ease-in-out;
        transition: filter,0.1s ease-in-out;
      }

      .c0 a:hover {
        -webkit-filter: brightness(0.85);
        filter: brightness(0.85);
      }

      <body>
        <div>
          <div
            class=""
          >
            <div
              class="c0"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
