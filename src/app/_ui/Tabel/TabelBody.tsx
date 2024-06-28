import { tabelData } from '@/constant/tabelData';
import TabelStick from './TabelStick';

export default function TabelBody() {
	return (
		<tbody className=" text-base text-primary-txt">
			{tabelData.map((stick) => (
				<TabelStick key={stick.id} stick={stick} />
			))}
		</tbody>
	);
}
