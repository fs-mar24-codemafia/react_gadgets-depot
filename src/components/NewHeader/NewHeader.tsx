import { FC, useEffect, useState } from 'react';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

import './NewHeader.scss';

interface Props {}

export const NewHeader: FC<Props> = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width < 640) {
    return <MobileHeader />
  }

  return <DesktopHeader />;
};
