import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'submit' | 'reset' | 'button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  isLoading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-50',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
  destructive: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading = false, startIcon, endIcon, className, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={clsx(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
          variantClasses[variant],
          sizeClasses[size],
          isLoading && 'cursor-not-allowed opacity-70',
          className
        )}
        {...props}>
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        )}
        {startIcon && !isLoading && <span className="mr-2">{startIcon}</span>}
        {children}
        {endIcon && !isLoading && <span className="ml-2">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
