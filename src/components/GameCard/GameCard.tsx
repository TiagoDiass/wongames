import * as S from './GameCard.styles';
import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  AddShoppingCart
} from 'styled-icons/material-outlined';
import { Button, Ribbon } from 'components';
import { RibbonProps } from 'components/Ribbon/Ribbon';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFavorite?: () => void;
  ribbon?: RibbonProps;
};

/**
 * Component used to show the main information about a game
 */
export default function GameCard({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  onFavorite,
  ribbon
}: GameCardProps) {
  return (
    <S.Wrapper>
      {!!ribbon && <Ribbon {...ribbon} size={ribbon.size || 'small'} />}

      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavoriteButton role='button' onClick={onFavorite}>
          {favorite ? (
            <FavoriteIcon aria-label='Remove from Wishlist' />
          ) : (
            <FavoriteBorderIcon aria-label='Add to Wishlist' />
          )}
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
