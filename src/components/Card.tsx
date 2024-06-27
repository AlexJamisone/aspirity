import { cn } from '@/utils';
export default function Card({
	children,
	className,
}: React.PropsWithChildren & { className?: string }) {
	return (
		<section className={cn('rounded-xl bg-secodary', className)}>
			{children}
		</section>
	);
}
