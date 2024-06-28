import TabelBody from './TabelBody';
import TabelHeader from './TabelHeader';

export default function Tabel() {
	return (
		<table className="hidden xl:table">
			<TabelHeader />
			<TabelBody />
		</table>
	);
}
