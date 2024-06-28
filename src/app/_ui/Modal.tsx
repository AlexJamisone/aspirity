'use client';
import { useSearchParams } from 'next/navigation';
import TabelProfile from './TabelProfile';

export default function Modal() {
	const searchParams = useSearchParams();
	const modal = searchParams.get('modal');

	return (
		<>
			{modal && (
				<dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto overscroll-contain bg-black bg-opacity-50 backdrop-blur ">
					<div className="relative max-h-full w-full xl:w-1/2">
						<TabelProfile />
					</div>
				</dialog>
			)}
		</>
	);
}
