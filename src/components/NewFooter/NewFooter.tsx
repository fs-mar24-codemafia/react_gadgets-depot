import { FC } from 'react';
import { Link } from 'react-router-dom';

import './NewFooter.scss';

export const NewFooter: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/" className="footer__logo-link">
          <img
            src='icons/logo.svg'
            alt="Nice Gadgets Logo"
            className="footer__logo"
          />
        </Link>

        <ul className="footer__links">
          <li className="footer__item">
            <a
              href="https://github.com/fs-mar24-codemafia/react_phone-store"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>

          <li className="footer__item">
            <a
              href="https://github.com/fs-mar24-codemafia/react_phone-store"
              className="footer__link"
            >
              Contacts
            </a>
          </li>

          <li className="footer__item">
            <a
              href="https://github.com/fs-mar24-codemafia/react_phone-store"
              className="footer__link"
            >
              Rights
            </a>
          </li>
        </ul>

        <button title="back to the top" className="footer__back-to-top" onClick={() => {window.scrollTo(0, 0)}}>
          Back to top
          <div className="ico ico-up footer__back-to-top-icon" />
        </button>
      </div>
    </footer>
  );
};
