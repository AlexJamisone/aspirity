import { v4 as uuid } from 'uuid';

export type TabelSticSchema = {
	id: string;
	type: 'vacation' | 'timeoff';
	from: Date;
	to: Date;
	days: number;
};

export const tabelData: TabelSticSchema[] = [
	{
		id: uuid(),
		type: 'vacation',
		from: new Date(2023, 2, 3),
		to: new Date(2023, 2, 23),
		days: 20,
	},
	{
		id: uuid(),
		type: 'timeoff',
		from: new Date(2023, 2, 3),
		to: new Date(2023, 2, 7),
		days: 4,
	},
	{
		id: uuid(),
		type: 'timeoff',
		from: new Date(2023, 2, 3),
		to: new Date(2023, 2, 7),
		days: 4,
	},
	{
		id: uuid(),
		type: 'timeoff',
		from: new Date(2023, 2, 3),
		to: new Date(2023, 2, 7),
		days: 4,
	},
	{
		id: uuid(),
		type: 'timeoff',
		from: new Date(2023, 2, 3),
		to: new Date(2023, 2, 7),
		days: 4,
	},
];
