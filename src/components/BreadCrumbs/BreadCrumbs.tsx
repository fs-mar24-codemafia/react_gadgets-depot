import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div className="bread-crumbs">
      <Link to="/" title='Return to the Homepage'>
        <i className="ico ico-home" />
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={to}>
            <i className="ico ico-right" />
            {!isLast ? (
              <Link to={to} className="bread-crumbs__cat-name">
                {value}
              </Link>
            ) : (
              <p className="bread-crumbs__name">{value}</p>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
