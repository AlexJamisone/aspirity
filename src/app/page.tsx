import Layout from './_ui/Layout';
import Tab from './_ui/Tab';

export default function Home() {
	return (
		<Layout>
			<Tab href="/">Lets go</Tab>
			<Tab href="/dashbord">Dashboard</Tab>
			<Tab href="/home">Other</Tab>
		</Layout>
	);
}
