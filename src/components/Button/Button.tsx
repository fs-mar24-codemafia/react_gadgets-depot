import cn from 'classnames';
import './Button.scss';

type Props = {
  children: string;
  // here will be func and value to change style
};

export const Button: React.FC<Props> = ({ children }) => (
  <a
    className={cn('button', { 'button--selected': false })}
    href="/#"
    onClick={() => {}}
  >
    {children}
  </a>
);
