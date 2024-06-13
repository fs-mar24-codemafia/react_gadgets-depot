// DropDown.tsx
import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './DropDown.scss';

interface Props {
  options: string[];
  chosenOption: string;
  onClick: (value: string) => void;
}

export const DropDown: FC<Props> = ({ options, chosenOption, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  }, [dropdownRef]);

  const handleClick = (value: string) => {
    setIsDropdownOpen(false);
    onClick(value);
  };

  const handleToggleOpen = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className={cn('dropbutton dropdown__top', {
          'dropdown__top--active': isDropdownOpen,
        })}
        onClick={handleToggleOpen}
      >
        {chosenOption[0].toUpperCase() + chosenOption.slice(1)}

        <i className={`ico ${isDropdownOpen ? 'ico-up' : 'ico-down'}`} />
      </button>

      <div
        className={cn('dropdown__bottom', {
          'dropdown__bottom--active': isDropdownOpen,
        })}
      >
        {options.map(option => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            className="dropbutton dropdown__option"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
