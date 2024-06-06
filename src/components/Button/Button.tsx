import classNames from 'classnames';

type Props = {
  title: string;
  className?: string;
  variant?: 'light' | 'dark';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (title: any) => void;
};

export function Button({ title, className, variant = 'dark', onClick }: Props) {
  return (
    <button
      className={classNames([
        'bg-mainblue-light px-5 py-2 rounded-lg shadow font-medium mt-3 ',
        variant === 'dark' && 'bg-mainblue-light text-white',
        variant === 'light' &&
          'bg-white border-2 border-mainblue-light text-mainblue-light',
        className,
      ])}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
