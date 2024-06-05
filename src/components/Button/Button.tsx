import cn from 'classnames';
import './Button.scss';

type Props = {
  text: string;
  // here will be func and value to change style
};

export const Button: React.FC<Props> = ({ text }) => (
  <a
    className={cn('button', { 'button--selected': false })}
    href="/#"
    onClick={() => {}}
  >
    {text}
  </a>
);
