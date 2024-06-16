import { FC } from 'react';
import cn from 'classnames';

import './Pagination.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (value: number) => void;
}

function paginate(currentPage: number, lastPage: number) {
  let startPage, endPage;
  const MAX_LENGTH = 5;

  if (lastPage <= MAX_LENGTH) {
    startPage = 1;
    endPage = lastPage;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= lastPage) {
      startPage = lastPage - 4;
      endPage = lastPage;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}

export const Pagination: FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pagesNumbers = paginate(currentPage, totalPages);
  const prevPageButtonDisabled = currentPage === 1;
  const nextPageButtonDisabled =
    currentPage === pagesNumbers[pagesNumbers.length - 1];

  const isPageActive = (page: number) => page === currentPage;

  if (!totalPages) {
    return <></>;
  }

  return (
    <ul className="pagination">
      <li
        className={cn('pagination__item pagination__item--left', {
          'pagination__item--disabled': prevPageButtonDisabled,
        })}
      >
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage - 1)}
          title="Go one page back"
        >
          <i className="ico ico-left-dark" />
        </button>
      </li>

      {pagesNumbers.map((pageNumber, id) => {
        if (isNaN(pageNumber)) {
          return (
            <li
              key={'plug' + id}
              className="pagination__item pagination__item--plug"
            >
              <p className="pagination__plug">...</p>
            </li>
          );
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
        );
      })}

      <li
        className={cn('pagination__item pagination__item--right', {
          'pagination__item--disabled': nextPageButtonDisabled,
        })}
      >
        <button
          className="pagination__page pagination__page--arrow"
          onClick={() => onPageChange(currentPage + 1)}
          title="Go one page forward"
        >
          <i className="ico ico-right-dark" />
        </button>
      </li>
    </ul>
  );
};
