import { buttonHTMLAttributes } from 'react';

export function button({ children, className = "", ...props }: buttonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition-all active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
