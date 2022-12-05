import { Heading } from 'components';
import * as S from './RichTextContent.styles';

export type RichTextContentProps = {
  title?: string;
  content: string;
};

/**
 * Component used to display a text content composed of rich text. Used mainly in the game details page
 */
export default function RichTextContent({ title, content }: RichTextContentProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor='secondary'>
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  );
}
