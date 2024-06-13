import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './Header.scss';
import { CartContext } from '../../contexts/CartContext';
import { FavoritesContext } from '../../contexts/FavoritesContext';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header" id="header">
        <NavLink to="/" className="header__logo-link">
          <img src="icons/logo.svg" alt="Nice Gadgets logo" className="logo" />
        </NavLink>

        <nav className={cn('nav menu', { 'menu--open': isMenuOpen })}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={handleCloseMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/phones"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                Phones
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/tablets"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                Tablets
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/accessories"
                className="nav__link"
                onClick={handleCloseMenu}
              >
                Accessories
              </NavLink>
            </li>
          </ul>

          <div className="nav__buttons">
            <NavLink
              to="/favourites"
              className="header-button"
              onClick={handleCloseMenu}
            >
              <div className="header-button__icon ico ico-fav">
                {!!favorites.length && (
                  <div className="indicator indicator-fav">
                    {favorites.length}
                  </div>
                )}
              </div>
            </NavLink>

            <NavLink
              to="/cart"
              className="header-button"
              onClick={handleCloseMenu}
            >
              <div className="header-button__icon ico ico-cart">
                {!!cartItems.length && (
                  <div className="indicator indicator-cart">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </NavLink>
          </div>
        </nav>

        <button
          className="header-button header-button--menu"
          onClick={handleMenu}
        >
          <div className={`ico ${isMenuOpen ? 'ico-close' : 'ico-menu'}`} />
        </button>
      </header>
    </>
  );
};
