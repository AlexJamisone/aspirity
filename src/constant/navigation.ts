import { v4 as uuid } from 'uuid';
type Navigation = {
	id: string;
	title: string;
	href: string;
};
export const navigation: Navigation[] = [
	{ id: uuid(), title: 'основаная информация', href: '/main' },
	{ id: uuid(), title: 'отпуск', href: '/' },
	{ id: uuid(), title: 'оборудование', href: '/equipments' },
];
