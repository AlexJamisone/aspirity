import Button from '@/components/Button';
import Layout from './_ui/Layout';
import Arrow from '@/components/icons/Arrow';
import UserProfile from './_ui/UserProfile';

export default function Home() {
	return (
		<Layout>
			<Button variant="ghost" className="text-tertiary-txt">
				<Arrow className="rotate-90 fill-tertiary-txt" />
				Вернуться к сотруднику
			</Button>
			<UserProfile />
		</Layout>
	);
}
