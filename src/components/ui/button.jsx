import React from 'react';
import { cn } from '../../lib/utils';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full';
  
  const variants = {
    primary: 'bg-theme-600 text-white hover:bg-theme-700 active:bg-theme-800 shadow-md hover:shadow-lg',
    secondary: 'bg-theme-100 text-theme-800 hover:bg-theme-200 border border-theme-200',
    outline: 'border-2 border-theme-400 text-theme-700 hover:bg-theme-50',
    ghost: 'text-theme-700 hover:bg-theme-100'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
