import css from './Alert.module.css';
import clsx from 'clsx';

export const Alert = ({ outlined, elevated, variant, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};
