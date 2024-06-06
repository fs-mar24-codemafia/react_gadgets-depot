import './IconFavour.scss';
import cn from 'classnames';

export const IconFavour = () => (
  <a className="iconFavour" href="/#">
    <span
      className={cn('ico ico-fav', { 'iconFavour--added': false })}
    ></span>
  </a>
);
