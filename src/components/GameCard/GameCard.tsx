import * as S from './GameCard.styles';
import {
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart
} from 'styled-icons/material-outlined';
import { Button } from 'components';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
};

/**
 * Component used to show the main information about a game
 */
export default function GameCard({
  title,
  developer,
  image,
  price,
  promotionalPrice
}: GameCardProps) {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavoriteButton role='button'>
          <FavoriteBorderIcon aria-label='Add to Wishlist' />
        </S.FavoriteButton>

        <S.PricingBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size='small' />
        </S.PricingBox>
      </S.Content>
    </S.Wrapper>
  );
}
