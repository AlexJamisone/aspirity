import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const textVariant = cva('text-primary-txt', {
	variants: {
		variant: {
			custom: 'text-5xl font-bold leading-[56px]',
			title: 'font-medium text-base',
			h1: 'text-8xl font-light leading-[112px]',
			h2: 'text-6xl font-light leading-[72px]',
			h3: 'text-5xl leading-[56px]',
			h4: 'xl:text-[34px] leading-9',
			h5: 'xl:text-2xl',
			h6: 'font-semibold text-xl leading-6',
			subtitle1: 'text-base',
			subtitle2: 'text-sm leading-6 font-medium',
			body1: 'text-base',
			body2: 'text-sm',
			caption: 'text-xs',
			overline: 'text-xs uppercase leading-8',
		},
	},
	defaultVariants: {
		variant: 'body1',
	},
});
interface TextProps
	extends HTMLAttributes<
			HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
		>,
		VariantProps<typeof textVariant> {
	as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Text({
	as = 'p',
	className,
	variant,
	...props
}: TextProps) {
	const Tag = as;
	return (
		<Tag className={cn(textVariant({ className, variant }))} {...props} />
	);
}
