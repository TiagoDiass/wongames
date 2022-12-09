import { Container, Footer, Menu } from 'components';
import * as S from './Base.styles';

type BaseProps = {
  children: React.ReactNode;
};

/**
 * Template: Base - responsible for adding the <Menu />, <Footer /> and any children between those.
 */
export default function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <S.Content>{children}</S.Content>

      <S.FooterSection>
        <Container>
          <Footer />
        </Container>
      </S.FooterSection>
    </S.Wrapper>
  );
}
