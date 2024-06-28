import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
	const option: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return date.toLocaleDateString('ru-RU', option).replace('г.', '');
}
