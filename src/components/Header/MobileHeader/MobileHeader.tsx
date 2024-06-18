import { FC, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTranslation } from 'react-i18next';

import { CartContext } from '../../../contexts/CartContext';
import { FavoritesContext } from '../../../contexts/FavoritesContext';
import { useTheme } from '../../../contexts/ThemeContext';

type Link = { title: string; link: string };

export const MobileHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const links: Link[] = [
    { title: t('nav.home'), link: '/' },
    { title: t('nav.phones'), link: '/phones' },
    { title: t('nav.tablets'), link: '/tablets' },
    { title: t('nav.accessories'), link: '/accessories' },
  ];

  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className="header__logo-link"
          onClick={handleMenuClose}
          title="Go to Home page"
        >
          <img
            src={theme === 'light' ? 'icons/logo.svg' : 'icons/logo-dark.svg'}
            alt="Nice Gadgets logo"
            className="logo"
          />
        </NavLink>

        <div className="header__buttons">
          <div className="nav__buttons-lng-wrp">
            <button onClick={changeLanguage} className="nav__buttons-lng-btn">
              {i18n.language === 'en' ? 'UA' : 'EN'}
            </button>
          </div>
          <div className="theme-button" title="Switch theme">
            <DarkModeSwitch
              checked={theme === 'dark'}
              onChange={toggleTheme}
              size={23}
            />
          </div>

          <button
            className="menu-button"
            onClick={toggleMenuOpen}
            title={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div
              className={`ico ${isMenuOpen ? 'ico-close-dark' : 'ico-menu'}`}
            />
          </button>
        </div>
      </header>

      <aside className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
        <nav className="nav">
          <ul className="nav__list">
            {links.map(link => (
              <li className="nav__item" key={link.title}>
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
