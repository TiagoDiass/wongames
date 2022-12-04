import {
  Apple as AppleIcon,
  Linux as LinuxIcon,
  Windows as WindowsIcon
} from 'styled-icons/fa-brands';
import { MediaMatch, Heading } from 'components';
import * as S from './GameDetails.styles';

type Platform = 'windows' | 'linux' | 'mac';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  releaseDate: string;
  platforms: Platform[];
  publisher: string;
  rating: Rating;
};

/**
 * Component used to show some details of a Game (such as platforms, developer, publisher, etc) in the game page
 */
export default function GameDetails({
  developer,
  releaseDate,
  platforms,
  publisher,
  rating
}: GameDetailsProps) {
  const platformIcons = {
    windows: <WindowsIcon title='Windows' size={18} />,
    linux: <LinuxIcon title='Linux' size={18} />,
    mac: <AppleIcon title='Mac' size={18} />
  };

  const formattedReleaseDetails = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(releaseDate));

  const formattedRating = rating === 'BR0' ? 'FREE' : rating.replace('BR', '').concat('+');

  return (
    <S.Wrapper>
      <MediaMatch greaterThan='medium'>
        <Heading lineLeft lineColor='secondary'>
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formattedReleaseDetails}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((platform) => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description aria-label='Game rating'>{formattedRating}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
}
