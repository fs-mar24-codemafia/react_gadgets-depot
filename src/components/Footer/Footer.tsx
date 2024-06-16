import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

import './Footer.scss';

export const Footer: FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer__container">
        {theme === 'light' ? (
          <Link to="/" className="footer__logo-link">
            <img
              src="icons/logo.svg"
              alt="Nice Gadgets Logo"
              className="footer__logo"
            />
          </Link>
        ) : (
          <Link to="/" className="footer__logo-link">
            <img
              src="icons/logo-dark.svg"
              alt="Nice Gadgets Logo"
              className="footer__logo"
            />
          </Link>
        )}

        <ul className="footer__links">
          <li className="footer__item">
            <a
              href="https://github.com/fs-mar24-codemafia/react_phone-store/tree/develop"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>

          <li className="footer__item">
            <a
              href="https://github.com/fs-mar24-codemafia"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Contacts
            </a>
          </li>

          <li className="footer__item">
            <a
              href="https://raw.githubusercontent.com/fs-mar24-codemafia/react_phone-store/master/LICENSE"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Rights
            </a>
          </li>
        </ul>

        <button
          title="back to the top"
          className="footer__back-to-top"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          Back to top
          <div className="ico ico-up footer__back-to-top-icon" />
        </button>
      </div>
    </footer>
  );
};
