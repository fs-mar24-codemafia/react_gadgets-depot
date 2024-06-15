import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { CartContext } from '../../../contexts/CartContext';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import { useTheme } from '../../../contexts/ThemeContext';

type Link = { title: string; link: string };

const links: Link[] = [
  { title: 'Home', link: '/' },
  { title: 'Phones', link: '/phones' },
  { title: 'Tablets', link: '/tablets' },
  { title: 'Accessories', link: '/accessories' },
];

export const MobileHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useTheme();

  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src="icons/logo.svg" alt="Nice Gadgets logo" className="logo" />
        </NavLink>

        <div className="header__buttons">
          <div className="theme-button">
            <DarkModeSwitch
              checked={theme === 'dark'}
              onChange={toggleTheme}
              size={23}
            />
          </div>

          <button className="menu-button" onClick={toggleMenuOpen}>
            <div className={`ico ${isMenuOpen ? 'ico-close' : 'ico-menu'}`} />
          </button>
        </div>
      </header>

      <aside className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
        <nav className="nav">
          <ul className="nav__list">
            {links.map(link => (
              <li className="nav__item">
                <NavLink
                  to={link.link}
                  className="nav__link"
                  onClick={handleMenuClose}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav__buttons">
            <NavLink
              to="/favourites"
              className="nav__button"
              onClick={handleMenuClose}
            >
              <div className="ico ico-fav icon">
                {!!favorites.length && (
                  <div className="indicator indicator-fav">
                    {favorites.length}
                  </div>
                )}
              </div>
            </NavLink>

            <NavLink
              to="/cart"
              className="nav__button"
              onClick={handleMenuClose}
            >
              <div className="ico ico-cart icon">
                {!!cartItems.length && (
                  <div className="indicator indicator-cart">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};
