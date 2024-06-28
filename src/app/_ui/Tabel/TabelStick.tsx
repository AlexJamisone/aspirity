import ArrowRight from '@/components/icons/ArrowRight';
import Text from '@/components/Text';
import type { TabelSticSchema } from '@/constant/tabelData';
import { formatDate } from '@/utils';

export default function TabelStick({
	stick: { days, to, from, type },
}: {
	stick: TabelSticSchema;
}) {
	return (
		<tr>
			<td className="w-1/3 px-2 py-4">
				{type === 'timeoff' ? 'Отгул' : 'Отпуск'}
			</td>
			<td className="flex gap-2 px-2 py-4">
				<Text as="span" className="text-nowrap">
					{formatDate(from)}
				</Text>
				<ArrowRight
					className={`${type === 'timeoff' ? 'fill-static-red' : 'fill-static-orange'}`}
				/>
				<Text as="span" className="text-nowrap">
					{formatDate(to)}
				</Text>
			</td>
			<td className="w-1/6 px-2 py-4 text-right">{days.toString()}</td>
		</tr>
	);
}
