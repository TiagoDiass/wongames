import * as S from './GameInfo.styles';
import { Heading, Button, Ribbon } from 'components';
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined';

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

/**
 * Component that will be used to display information about a game
 */
export default function GameInfo({ title, description, price }: GameInfoProps) {
  return (
    <S.Wrapper>
      <Heading color='black' lineBottom lineColor='primary'>
        {title}
      </Heading>

      <Ribbon color='secondary'>${price}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} size='large'>
          Add to cart
        </Button>

        <Button title='Add game to Wishlist' icon={<FavoriteBorder />} size='large' minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
}
