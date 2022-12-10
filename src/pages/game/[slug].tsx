import { GetStaticPropsResult, GetStaticPathsResult } from 'next';
import GameTemplate, { GameTemplateProps } from 'templates/Game/Game';

export default function Game(props: GameTemplateProps) {
  return <GameTemplate {...props} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<GameTemplateProps>> {
  return {
    props: {
      cover: '/img/games/cyberpunk-6.jpeg'
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
