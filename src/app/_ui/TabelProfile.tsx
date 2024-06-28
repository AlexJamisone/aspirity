import Card from '@/components/Card';
import Tabel from './Tabel';
import Text from '@/components/Text';
import Link from 'next/link';

export default function TabelProfile() {
	return (
		<Card className="flex w-full flex-col gap-4 p-[30px]">
			<div className="flex justify-between">
				<Text as="h5" variant="h5">
					История отпусков
				</Text>
				<Link href="/all">
					<Text variant="subtitle2" className="text-tertiary-txt ">
						Посмотреть все
					</Text>
				</Link>
			</div>
			<Tabel />
		</Card>
	);
}
