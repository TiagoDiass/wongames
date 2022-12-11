import GalleryMock from 'components/Gallery/Gallery.mock';
import GameDetailsMock from 'components/GameDetails/GameDetails.mock';
import GameInfoMock from 'components/GameInfo/GameInfo.mock';
import RichTextContentMock from 'components/RichTextContent/RichTextContent.mock';
import { GetStaticPropsResult, GetStaticPathsResult } from 'next';
import GameTemplate, { GameTemplateProps } from 'templates/Game/Game';

export default function Game(props: GameTemplateProps) {
  return <GameTemplate {...props} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<GameTemplateProps>> {
  return {
    props: {
      cover: '/img/games/cyberpunk-6.jpeg',
      gameInfo: GameInfoMock,
      gallery: GalleryMock.images,
      description: RichTextContentMock.content,
      details: GameDetailsMock
    }
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [
      {
        params: {
          slug: 'cyberpunk-2077'
        }
      }
    ],
    fallback: false
  };
}
