import classNames from 'classnames';
import { useCallback } from 'react';

type Props = {
  title: string;
  className?: string;
};

export function Tag({ title, className }: Props) {
  const randonColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 30%)`;
    return { lightness, darkness };
  }, []);

  return (
    <p
      style={{
        backgroundColor: randonColors().lightness,
        color: randonColors().darkness,
      }}
      className={classNames([
        'rounded-full bg-opacity-50 text-center w-fit px-3',
        className,
      ])}
    >
      {title}
    </p>
  );
}
