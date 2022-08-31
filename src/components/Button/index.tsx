import { MouseEventHandler, ReactNode } from 'react';

export default function Button({
  variant = 'primary',
  ...props
}: {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`${
        variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
      }
        text-white p-2 rounded`}
      type="button"
      {...props}
    />
  );
}
