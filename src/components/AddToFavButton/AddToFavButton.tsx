import { Product } from '../../types/Product';
import './AddToFavButton.scss';
import cn from 'classnames';

type Props = {
  product?: Product
}

export const AddToFavButton: React.FC<Props> = () => (
  <i className={cn("iconFavour", {'iconFavour--added': false })}>
    <span
      className={cn('ico ico-fav', { 'ico-fav-red': false })}
      onClick={() => {}}
    ></span>
  </i>
);
