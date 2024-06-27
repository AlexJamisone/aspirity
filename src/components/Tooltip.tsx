import { cn } from '@/utils';
import { HTMLAttributes } from 'react';

export default function Tooltip({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'mix-w-0 rounded bg-modal px-2.5 py-1.5  ',
				className,
			)}
			{...props}
		/>
	);
}
