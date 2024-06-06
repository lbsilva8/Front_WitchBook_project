import classNames from 'classnames';

type Props = {
  title: string;
  className?: string;
};

export function Title({ title, className }: Props) {
  return (
    <div
      className={classNames([
        'md:text-2xl text-1xl border-b-4 border-b-mainblue w-fit font-bold ',
        className,
      ])}
    >
      {title}
    </div>
  );
}
