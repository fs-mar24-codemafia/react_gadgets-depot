import cn from 'classnames';
import './Button.scss';

type Props = {
  children: string;
  handleClick?: () => void;
};

export const Button: React.FC<Props> = ({ children, handleClick }) => (
  <button
    className={cn('button', { 'button--selected': false })}
    onClick={handleClick}
  >
    {children}
  </button>
);
