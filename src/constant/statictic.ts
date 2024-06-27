import { v4 as uuid } from 'uuid';

export type Segment = {
	id: string;
	title: string;
	value: number;
	color: string;
	type: string | null;
	strokeColor: string;
};

export const staticticData: Segment[] = [
	{
		id: uuid(),
		title: 'Доступно сейчас',
		color: 'text-static-green',
		type: 'available',
		value: 36,
		strokeColor: 'stroke-static-green',
	},
	{
		id: uuid(),
		title: 'Запланировано',
		color: 'text-static-orange',
		type: 'planned',
		value: 10,
		strokeColor: 'stroke-static-orange',
	},
	{
		id: uuid(),
		title: 'Использовано/недоступно',
		color: 'text-static-red',
		type: 'unavailable',
		value: 5,
		strokeColor: 'stroke-static-red',
	},
];
