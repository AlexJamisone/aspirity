export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex bg-primary px-4 md:px-grid-x">{children}</main>
	);
}
