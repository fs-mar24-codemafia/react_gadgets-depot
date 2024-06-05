import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a
          href="https://github.com/fs-mar24-codemafia/react_phone-store"
          className="footer__logo link"
          title="page logo"
        ></a>

        <nav className="footer__nav nav">
          <a
            href="https://github.com/fs-mar24-codemafia/react_phone-store"
            className="footer__nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/fs-mar24-codemafia/react_phone-store"
            className="footer__nav-link"
          >
            Contacts
          </a>
          <a
            href="https://github.com/fs-mar24-codemafia/react_phone-store"
            className="footer__nav-link"
          >
            Rights
          </a>
        </nav>

        <div className="footer__back-to-top">
          <a href="#header" className="footer__back-to-top-link">
            Back to top
            <span className="ico-up" />
          </a>
        </div>
      </div>
    </footer>
  );
};
