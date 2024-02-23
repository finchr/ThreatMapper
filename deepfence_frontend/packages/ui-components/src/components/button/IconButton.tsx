import { cva, VariantProps } from 'cva';
import { ComponentProps, forwardRef, useId } from 'react';
import { cn } from 'tailwind-preset';

import { Loader } from '@/components/button/Button';
import { ObjectWithNonNullableValues } from '@/types/utils';

export type ColorType = 'default' | 'error' | 'success';
export type SizeType = 'lg' | 'md' | 'sm';
export type VariantType = 'outline' | 'flat';

export const iconButtonCVA = cva(
  [
    'flex flex-row items-center justify-center',
    'rounded focus:outline-none select-none',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: `p-[5px]`,
        md: `p-[7px]`,
        lg: `p-[10px]`,
      },
      color: {
        default: [
          // bg styles
          'hover:bg-[#1466B8] dark:hover:bg-[#3777c2] bg-btn-blue',
          // text styles
          'text-text-text-inverse',
          // focus styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'focus:bg-[#144BB8] focus:outline-[#0055ff]/50',
          'dark:focus:bg-bg-hover-1 dark:focus:outline-bg-hover-3',
          // disabled styles
          'dark:disabled:bg-df-gray-600 dark:disabled:text-df-gray-900',
          'disabled:bg-[#CCCCCC] disabled:text-text-text-and-icon disabled:dark:text-opacity-100 disabled:text-opacity-40',
        ],
        error: [
          // bg styles
          'bg-btn-red dark:hover:bg-[#C45268] hover:bg-[#BC3434]',
          // text styles
          'text-text-text-inverse',
          // focus styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'focus:bg-[#B50909] focus:outline-[#de2121]/50',
          'dark:focus:bg-[#C45268] dark:focus:outline-[#ffffffb3]',
          // disabled styles
          // disabled styles
          'dark:disabled:bg-df-gray-600 dark:disabled:text-df-gray-900',
          'disabled:bg-[#CCCCCC] disabled:text-text-text-and-icon disabled:dark:text-opacity-100 disabled:text-opacity-40',
        ],
        success: [
          // bg styles
          'bg-btn-green dark:hover:bg-[#119365] hover:bg-[#257A1F]',
          // text styles
          'text-text-text-inverse',
          // focus styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'focus:bg-[#257A1F] focus:outline-[#1c8804]/50',
          'dark:focus:bg-[#2F6F2A] dark:focus:outline-[#ffffffb3]',
          // disabled styles
          'dark:disabled:bg-df-gray-600 dark:disabled:text-df-gray-900',
          'disabled:bg-[#CCCCCC] disabled:text-text-text-and-icon disabled:dark:text-opacity-100 disabled:text-opacity-40',
        ],
      },
      variant: {
        outline: '',
        flat: '',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
    },
    compoundVariants: [
      {
        color: 'default',
        variant: 'outline',
        className: [
          // bg styles
          'bg-transparent dark:hover:bg-bg-hover-2 hover:bg-[#7fa9ff] hover:bg-opacity-10',
          // text styles
          'text-accent-accent dark:hover:text-accent-accent',
          'dark:hover:text-accent-accent hover:text-[#1466B8]',
          'dark:focus:text-accent-accent focus:text-[#144BB8]',
          // border styles
          'border border-accent-accent dark:hover:border-accent-accent hover:border-[#1466B8]',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'focus:bg-[#7fa9ff] focus:bg-opacity-10 focus:outline-[#0055ff]/50',
          'dark:focus:bg-bg-hover-2 dark:focus:outline-bg-hover-3',
          // disabled styles
          'disabled:bg-transparent dark:disabled:bg-transparent',
          'disabled:border-text-text-and-icon dark:disabled:border-df-gray-600 disabled:border-opacity-40',
          'dark:disabled:text-df-gray-700 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
      {
        color: 'error',
        variant: 'outline',
        className: [
          // bg styles
          'bg-transparent dark:hover:bg-[#33151B] hover:bg-[#DE2121] hover:bg-opacity-10',
          // text styles
          'text-status-error dark:hover:text-status-error',
          'dark:hover:text-status-error hover:text-[#BC3434]',
          'dark:focus:text-status-error focus:text-[#B50909]',
          // border styles
          'border border-status-error dark:hover:border-status-error hover:border-[#de2121]',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'dark:focus:outline-[#ffffffb3] focus:outline-[#de2121]/50',
          'dark:focus:bg-[#33151B] focus:bg-[#de2121] focus:bg-opacity-10',
          // disabled styles
          'disabled:bg-transparent dark:disabled:bg-transparent',
          'disabled:border-text-text-and-icon dark:disabled:border-df-gray-600 disabled:border-opacity-40',
          'dark:disabled:text-df-gray-700 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          // bg styles
          'bg-transparent dark:hover:bg-[#052E20] hover:bg-[#1C880433] hover:bg-opacity-20',
          // text styles
          'text-status-success dark:hover:text-status-success',
          'dark:hover:text-status-success hover:text-[#257A1F]',
          'dark:focus:text-status-success focus:text-[#2B7326]',
          // border styles
          'border border-status-success dark:hover:border-status-success hover:border-[#1C8804]',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'dark:focus:outline-[#ffffffb3] focus:outline-[#2B7326]/50',
          'dark:focus:bg-[#052E20] focus:bg-[#1C880433] focus:bg-opacity-20',
          // disabled styles
          'disabled:bg-transparent dark:disabled:bg-transparent',
          'disabled:border-text-text-and-icon dark:disabled:border-df-gray-600 disabled:border-opacity-40',
          'dark:disabled:text-df-gray-700 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
      {
        color: 'default',
        variant: 'flat',
        className: [
          // bg styles
          'bg-transparent dark:hover:bg-transparent hover:bg-transparent',
          'dark:focus:bg-transparent focus:bg-transparent',
          // text styles
          'text-btn-blue dark:text-btn-blue',
          'dark:hover:text-[#3777C2] hover:text-[#1466B8]',
          'dark:focus:text-[#3777C2] focus:text-[#144BB8]',
          // border styles
          'border-none',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'focus:outline-[#144BB8]/50 dark:focus:outline-[#0140E3]',
          // disabled styles
          'dark:disabled:bg-transparent disabled:bg-transparent',
          'dark:disabled:text-df-gray-600 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
      {
        color: 'error',
        variant: 'flat',
        className: [
          // bg styles
          'bg-transparent dark:hover:bg-transparent hover:bg-transparent',
          'dark:focus:bg-transparent focus:bg-transparent',
          // text styles
          'text-btn-red dark:text-btn-red',
          'dark:hover:text-[#C45268] hover:text-[#BC3434]',
          'dark:focus:text-[#C45268] focus:text-[#B50909]',
          // border styles
          'border-none',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'dark:focus:outline-[#ffffffb3] focus:outline-[#B50909]/50',
          // disabled styles
          'dark:disabled:bg-transparent disabled:bg-transparent',
          'dark:disabled:text-df-gray-600 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
      {
        color: 'success',
        variant: 'flat',
        className: [
          // bg styles
          'bg-transparent hover:bg-transparent dark:hover:bg-transparent',
          'dark:focus:bg-transparent focus:bg-transparent',
          // text styles
          'text-btn-green dark:text-btn-green',
          'dark:hover:text-[#119366] hover:text-[#257A1F]',
          'dark:focus:text-[#119366] focus:text-[#2B7326]',
          // border styles
          'border-none',
          // outline styles
          'focus:outline-[2px] focus:outline-offset-0 dark:focus:outline-offset-transparent',
          'dark:focus:outline-offset-1',
          'dark:focus:outline-[#ffffffb3] focus:outline-[#2B7326]/50',
          // disabled styles
          'dark:disabled:bg-transparent disabled:bg-transparent',
          'dark:disabled:text-df-gray-600 disabled:text-text-text-and-icon disabled:text-opacity-40',
        ],
      },
    ],
  },
);

export interface IconButtonProps
  extends Omit<ComponentProps<'button'>, 'color'>,
    ObjectWithNonNullableValues<Omit<VariantProps<typeof iconButtonCVA>, 'withOutline'>> {
  icon?: React.ReactNode;
  variant?: VariantType;
  loading?: boolean;
}

const iconCva = cva('', {
  variants: {
    size: {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-4 h-4',
    },
  },
});

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { size = 'md', color, disabled, variant, icon, id, className, loading, ...props },
    ref,
  ) => {
    const internalId = useId();
    const _id = id ? id : internalId;

    return (
      <button
        ref={ref}
        id={_id}
        data-testid={`icon-button-${_id}`}
        disabled={disabled}
        className={cn(
          iconButtonCVA({
            size,
            color,
            variant,
          }),
          className,
        )}
        {...props}
      >
        {icon && !loading && (
          <span
            className={iconCva({
              size,
            })}
          >
            {icon}
          </span>
        )}
        {loading && (
          <div className="flex justify-center">
            <Loader color={color} size={size} variant={variant} />
          </div>
        )}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
