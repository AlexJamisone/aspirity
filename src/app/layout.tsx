import type { Metadata } from 'next';
import './globals.css';
import Header from './_ui/Header';
import Modal from './_ui/Modal';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-primary">
				<Header />
				{props.children}
				<Modal />
			</body>
		</html>
	);
}
