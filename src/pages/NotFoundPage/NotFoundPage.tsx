import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="pageNotFound__wrapper">
      <div className="pageNotFound">
        <h1 className="pageNotFound__title">Oooops! Page not found...</h1>

        <div className="pageNotFound__image-wrapper">
          <img
            src="img/page-not-found.png"
            alt="page-not-found"
            className="pageNotFound__img"
          />
        </div>
      </div>
    </div>
  );
};
