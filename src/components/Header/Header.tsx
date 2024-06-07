import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Header.scss';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className='header' id='header'>
        <NavLink to='/' className='header__logo-link'>
          <img src='icons/logo.svg' alt="Nice Gadgets logo" className='logo'/>
        </NavLink>

        <nav className={cn('nav menu', {'menu--open': isMenuOpen})}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink to="/" className='nav__link' onClick={handleCloseMenu}>Home</NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/phones" className='nav__link' onClick={handleCloseMenu}>Phones</NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/tablets" className='nav__link' onClick={handleCloseMenu}>Tablets</NavLink>
            </li>

            <li className='nav__item'>
              <NavLink to="/accessories" className='nav__link' onClick={handleCloseMenu}>Accessories</NavLink>
            </li>
          </ul>

          <div className="nav__buttons">
            <NavLink to="/favourites" className="nav__button button" onClick={handleCloseMenu}>
              <div className="ico ico-fav" />
            </NavLink>

            <NavLink to="/cart" className="nav__button button" onClick={handleCloseMenu}>
              <div className="ico ico-cart" />
            </NavLink>
          </div>
        </nav>

        <button className='button button--menu' onClick={handleMenu}>
          <div className={`ico ${isMenuOpen ? 'ico-close' : 'ico-menu'}`} />
        </button>
      </header>
    </>
  );
};
