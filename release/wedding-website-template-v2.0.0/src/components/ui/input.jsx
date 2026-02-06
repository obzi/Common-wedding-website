import React from 'react';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-xl border border-sage-200 bg-white px-4 py-2 text-sage-900',
        'placeholder:text-sage-400',
        'focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';
