import { tabelData } from '@/constant/tabelData';
import MobileSticker from './MobileSticker';

export default function MobileTabel() {
	return (
		<div className="flex flex-col xl:hidden">
			{tabelData.map((stick, idx) => (
				<MobileSticker
					stick={stick}
					key={stick.id}
					isLast={idx === tabelData.length - 1}
				/>
			))}
		</div>
	);
}
