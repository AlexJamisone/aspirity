import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { forwardRef, HTMLAttributes } from 'react';

const avatarVariant = cva('relative cursor-pointer', {
	variants: {
		size: {
			lg: 'size-40',
			md: 'size-24',
			sm: 'size-24',
			xs: 'size-6',
		},
	},
	defaultVariants: {
		size: 'lg',
	},
});

interface AvatarProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof avatarVariant> {}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	({ size, className, ...props }, ref) => {
		return (
			<div
				className={cn(avatarVariant({ size, className }))}
				ref={ref}
				{...props}
			>
				<Image src="/avatar.png" fill alt="avatar" />
				<div className="absolute top-0 flex size-full items-center justify-center rounded-full bg-black/50 opacity-0 transition hover:opacity-100">
					<div
						className={
							size === 'xs'
								? 'relative size-4'
								: 'relative size-[24px]'
						}
					>
						<Image src="/camera.svg" fill alt="camera" />
					</div>
				</div>
			</div>
		);
	},
);

export default Avatar;
