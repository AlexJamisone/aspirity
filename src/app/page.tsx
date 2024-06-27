import Button from '@/components/Button';
import Header from './_ui/Header';
import Layout from './_ui/Layout';
import Arrow from '@/components/icons/Arrow';

export default function Home() {
	return (
		<Layout>
			<Header />
			<Button variant="ghost" className="text-tertiary-txt">
				<Arrow className="rotate-90 fill-tertiary-txt" />
				Вернуться к сотруднику
			</Button>
		</Layout>
	);
}
