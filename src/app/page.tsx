import StaticProfile from './_ui/StaticProfile';
import TabelProfile from './_ui/TabelProfile';

export default function Home() {
	return (
		<div className="flex flex-col gap-4 xl:flex-row">
			<StaticProfile />
			<TabelProfile />
		</div>
	);
}
