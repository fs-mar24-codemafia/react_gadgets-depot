import { FC } from 'react';
import cn from 'classnames';

import './Pagination.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

const getPaginationNumbers = (currentPage: number, lastPage: number) => {
  const maxLength = 7;
  const res: Array<number> = [];

  if (lastPage <= maxLength) {
    for (let i = 1; i <= lastPage; i++) {
      res.push(i);
    }
  } else {
    const firstPage = 1;
    const confirmedPagesCount = 3;
    const deductedMaxLength = maxLength - confirmedPagesCount;
    const sideLength = deductedMaxLength / 2;

    if (
      currentPage - firstPage < sideLength ||
      lastPage - currentPage < sideLength
    ) {
      for (let j = 1; j <= sideLength + firstPage; j++) {
        res.push(j);
      }

      res.push(NaN);

      for (let k = lastPage - sideLength; k <= lastPage; k++) {
        res.push(k);
      }
    } else if (
      currentPage - firstPage >= deductedMaxLength &&
      lastPage - currentPage >= deductedMaxLength
    ) {
      const deductedSideLength = sideLength - 1;

      res.push(1);
      res.push(NaN);

      for (
        let l = currentPage - deductedSideLength;
        l <= currentPage + deductedSideLength;
        l++
      ) {
        res.push(l);
      }

      res.push(NaN);
      res.push(lastPage);

    } else {
      const isNearFirstPage = currentPage - firstPage < lastPage - currentPage;
      let remainingLength = maxLength;

      if (isNearFirstPage) {
        for (let m = 1; m <= currentPage + 1; m++) {
          res.push(m);
          remainingLength -= 1;
        }

        res.push(NaN);
        remainingLength -= 1;
      } else {
        for (let o = lastPage; o >= currentPage - 1; o--) {
          res.unshift(o);
          remainingLength -= 1;
        }

        res.unshift(NaN);
        remainingLength -= 1;

        for (let p = remainingLength; p >= 1; p--) {
          res.unshift(p);
        }
      }
    }
  }

  return res;
};

export const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pagesNumbers = getPaginationNumbers(currentPage, totalPages);
  const prevPageButtonHidden = currentPage === 1;
  const nextPageButtonHidden =
    currentPage === pagesNumbers[pagesNumbers.length - 1];

  const isPageActive = (page: number) => page === currentPage;

  if (!totalPages) {
    return <></>;
  }

  return (
    <ul className="pagination">
      <li
        className={cn('pagination__item pagination__item--left', {
          'pagination__item--hidden': prevPageButtonHidden,
        })}
      >
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage - 1)}
          title='Go one page back'
        >
          <i className="ico ico-left-dark" />
        </button>
      </li>

      {pagesNumbers.map((pageNumber, id) => {
        if (isNaN(pageNumber)) {
          return (
            <li key={'plug' + id} className='pagination__item pagination__item--plug'>
              <p className='pagination__plug'>...</p>
            </li>
          )
        }

        return (
          <li key={pageNumber} className="pagination__item">
            {' '}
            <button
              className={cn('pagination__page', {
                'pagination__page--active': isPageActive(pageNumber),
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        )
      })}

      <li
        className={cn('pagination__item pagination__item--right', {
          'pagination__item--hidden': nextPageButtonHidden,
        })}
      >
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage + 1)}
          title='Go one page forward'
        >
          <i className="ico ico-right-dark" />
        </button>
      </li>
    </ul>
  );
};
