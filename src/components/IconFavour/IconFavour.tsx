import './IconFavour.scss';
import cn from 'classnames';

type Props = {
  handleClick?: () => void;
}

export const IconFavour: React.FC<Props> = ({ handleClick }) => (
  <i className={cn("iconFavour", {'iconFavour--added': false })}>
    <span
      className={cn('ico ico-fav', { 'ico-fav-red': false })}
      onClick={handleClick}
    ></span>
  </i>
);
