import ArrowRight from '@/components/icons/ArrowRight';
import Text from '@/components/Text';
import { TabelSticSchema } from '@/constant/tabelData';
import { formatDate } from '@/utils';

export default function MobileSticker({
	stick: { days, from, type, to },
	isLast,
}: {
	stick: TabelSticSchema;
	isLast: boolean;
}) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-2">
				<Text className="text-tertiary-txt">Тип</Text>
				<Text className="text-primary-txt">
					{type === 'timeoff' ? 'Отгул' : 'Больничный'}
				</Text>
			</div>
			<div className="flex flex-col gap-2">
				<Text className="text-tertiary-txt">Дата отпуска</Text>
				<div className="flex gap-2">
					<Text className="text-primary-txt">{formatDate(from)}</Text>
					<ArrowRight
						className={
							type === 'timeoff'
								? 'fill-static-red'
								: 'fill-static-orange'
						}
					/>
					<Text className="text-primary-txt">{formatDate(to)}</Text>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Text className="text-tertiary-txt">Количество дней</Text>
				<Text className="text-primary-txt">{days}</Text>
			</div>
			{!isLast && <hr className="border-prime-bord pt-4" />}
		</div>
	);
}
