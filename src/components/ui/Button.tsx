import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement, isValidElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-navy',
        secondary: 'bg-neutral-100 text-primary hover:bg-neutral-200',
        blue: 'bg-primary-blue text-white hover:bg-blue-600',
        navy: 'bg-primary-navy text-white hover:bg-blue-800',
        accent: 'bg-accent text-white hover:bg-sky-600',
        outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'hover:bg-neutral-100 text-primary',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1',
        lg: 'h-12 px-6 py-3 text-base',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const buttonClasses = clsx(buttonVariants({ variant, size, className }));

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        className: clsx(buttonClasses, children.props?.className),
        ...props,
      });
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };