'use client';
import Card from '@/components/Card';
import Tabel from './Tabel';
import Text from '@/components/Text';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import Close from '@/components/icons/Close';
import MobileTabel from './Tabel/MobileTabel';

export default function TabelProfile() {
	const searchParam = useSearchParams();
	const modal = searchParam.get('modal');
	const router = useRouter();
	const pathname = usePathname();
	const type = !modal ? 'h5' : 'h4';
	function handlClose() {
		const params = new URLSearchParams(searchParam);
		params.delete('modal');
		return router.replace(pathname);
	}
	return (
		<Card className="flex w-full flex-col gap-4 p-[30px]">
			<div className="flex items-center justify-between">
				<Text as={type} variant={type} className="text-base">
					История отпусков
				</Text>
				{!modal ? (
					<Link href="?modal=true">
						<Text variant="subtitle2" className="text-tertiary-txt">
							Посмотреть все
						</Text>
					</Link>
				) : (
					<Button variant="ghost" onClick={handlClose}>
						<Close className="fill-secondary-txt" />
					</Button>
				)}
			</div>
			<Tabel />
			<MobileTabel />
		</Card>
	);
}
