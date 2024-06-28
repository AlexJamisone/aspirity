import TabelBody from './TabelBody';
import TabelHeader from './TabelHeader';

export default function Tabel() {
	return (
		<table className="w-full ">
			<TabelHeader />
			<TabelBody />
		</table>
	);
}
