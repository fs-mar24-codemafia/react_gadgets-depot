import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="#" className="footer__logo link">
        </a>

        <nav className="footer__nav nav">
          <a href="#" className="footer__nav-link">
            Github
          </a>
          <a href="#" className="footer__nav-link">
            Contacts
          </a>
          <a href="#" className="footer__nav-link">
            Rights
          </a>
        </nav>

        <div className="footer__back-to-top">
          Back to top
          <a href="#header" className="ico-up"/>
        </div>
      </div>
    </footer>
  );
};
