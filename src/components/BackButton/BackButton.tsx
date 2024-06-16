import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './BackButton.scss';

export const BackButton = () => {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleBackClick = () => {
    if (canGoBack) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      type="button"
      className="back-button"
      onClick={handleBackClick}
      aria-label="Go back"
    >
      <i className="ico ico-left-dark back-button--icon" />
      <span className="back-button--title">Back</span>
    </button>
  );
};
