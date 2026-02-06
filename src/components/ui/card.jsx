import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-theme-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
}
