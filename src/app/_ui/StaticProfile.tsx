import Card from '@/components/Card';
import Text from '@/components/Text';
import Chart from './Chart';

export default function StaticProfile() {
	return (
		<Card className="flex w-1/3 flex-col gap-4 p-[30px]">
			<header>
				<Text as="h5" variant="h5">
					Статистика
				</Text>
			</header>
			<Chart />
		</Card>
	);
}
