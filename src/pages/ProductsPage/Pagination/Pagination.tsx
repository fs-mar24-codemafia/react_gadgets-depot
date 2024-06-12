import { FC } from 'react';
import cn from 'classnames';

import './Pagination.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

const getNumbers = (from: number, to: number): number[] => {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
};

export const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pagesNumbers = getNumbers(1, totalPages);
  const prevPageButtonHidden = currentPage === 1;
  const nextPageButtonHidden = currentPage === pagesNumbers[pagesNumbers.length - 1];

  const isPageActive = (page: number) => page === currentPage;

  if (!totalPages) {
    return <></>;
  }

  return (
    <ul className="pagination">

      <li className={cn('pagination__item pagination__item--left', {'pagination__item--hidden': prevPageButtonHidden})}>
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <i className="ico ico-left-dark" />
        </button>
      </li>

      {pagesNumbers.map(pageNumber => (
        <li className='pagitation__item'>
          <button
            className={cn('pagination__page', {'pagination__page--active': isPageActive(pageNumber)})}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}

      <li className={cn('pagitanion__item pagination__item--right', {'pagination__item--hidden': nextPageButtonHidden})}>
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <i className="ico ico-right-dark" />
        </button>
      </li>
    </ul>
  );
};
