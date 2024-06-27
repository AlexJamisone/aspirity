import { useStatictic } from '@/store/useStatictic';
import Text from './Text';
import { cn } from '@/utils';
import { Segment } from '@/constant/statictic';

export default function StaticticStick({
	segment: { title, type, value, color },
}: {
	segment: Segment;
}) {
	const setType = useStatictic((state) => state.setType);
	const tp = useStatictic((state) => state.type);
	return (
		<div
			className={`box-border flex cursor-pointer justify-between text-nowrap rounded-2xl  border px-[10px] py-3 transition-colors ${type === tp ? 'border-primary-txt' : 'border-prime-bord'}`}
			onMouseEnter={() => setType(type)}
			onMouseLeave={() => setType(null)}
		>
			<div className="flex items-center gap-2">
				<Text as="span" className={cn(color)}>
					•
				</Text>
				<Text>{title}</Text>
			</div>
			<Text>
				{value.toString()} {type === 'planned' ? 'дней' : 'дня'}
			</Text>
		</div>
	);
}
