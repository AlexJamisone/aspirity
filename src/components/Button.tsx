import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = cva(
	'uppercase font-semibold text-sm rounded flex gap-2 transition items-center focus:outline-none disabled:cursor-not-allowed disabled:text-primary-txt',
	{
		variants: {
			variant: {
				default:
					'bg-accent hover:bg-accent-hov text-primary-txt focus:bg-accent-focuse disabled:bg-disabel',
				outline:
					'bg-transperent text-accent border-accent border focus:bg-accent/50 hover:bg-accent-hov/10 disabled:text-primary-txt disabled:border-disabel',
				ghost: 'bg-transperent text-accent focus:bg-accent/50 hover:bg-accent-hov/10',
			},
			isIcon: {
				true: 'p-2',
				false: 'px-4 py-[10px]',
			},
		},
		defaultVariants: {
			variant: 'default',
			isIcon: false,
		},
	},
);
interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, isIcon, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(buttonVariants({ variant, className, isIcon }))}
				{...props}
			/>
		);
	},
);

export default Button;
