'use client';
import Card from '@/components/Card';
import Text from '@/components/Text';
import Chart from './Chart';
import Info from '@/components/icons/Info';
import Tooltip from '@/components/Tooltip';
import { useStatictic } from '@/store/useStatictic';

export default function StaticProfile() {
	const [hover, set] = useStatictic((state) => [state.tooltip, state.setHov]);
	return (
		<Card className="flex w-full flex-col gap-4 p-[30px] xl:w-1/3">
			<header className="relative flex w-fit items-center gap-2 ">
				<Text as="h5" variant="h5">
					Статистика
				</Text>
				<Info
					className="cursor-pointer fill-secondary-txt"
					onMouseEnter={() => set(true)}
					onMouseLeave={() => set(false)}
				/>
				<Tooltip
					className={`absolute left-[calc(100%+7px)] top-0 opacity-0 transition-opacity duration-300 ease-in-out ${hover ? 'opacity-100' : ''}`}
				>
					<Text variant="subtitle2" className="text-nowrap">
						1 раб. месяц = 3 дня отпуска
					</Text>
				</Tooltip>
			</header>
			<Chart />
		</Card>
	);
}
