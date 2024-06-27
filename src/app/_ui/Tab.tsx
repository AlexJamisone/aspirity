'use client';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function Tab({
	children,
	...props
}: LinkProps & { children: ReactNode }) {
	const pathname = usePathname();
	const isActive = pathname === props.href;
	return (
		<Link
			className={`m-0 flex gap-2 px-4 py-base text-sm font-semibold uppercase ${isActive ? 'border-b-2 border-accent text-secondary-txt' : 'border-b border-prime-bord text-primary-txt'}`}
			{...props}
		>
			{children}
		</Link>
	);
}
