import type { Metadata } from 'next';
import './globals.css';
import Header from './_ui/Header';
import Modal from './_ui/Modal';
import Button from '@/components/Button';
import Arrow from '@/components/icons/Arrow';
import UserProfile from './_ui/UserProfile';
import Layout from './_ui/Layout';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-primary">
				<Header />
				<Layout>
					<Button variant="ghost" className="text-tertiary-txt">
						<Arrow className="rotate-90 fill-tertiary-txt" />
						Вернуться к сотруднику
					</Button>
					<UserProfile />
					{props.children}
				</Layout>
				<Suspense fallback={'Load modal'}>
					<Modal />
				</Suspense>
			</body>
		</html>
	);
}
