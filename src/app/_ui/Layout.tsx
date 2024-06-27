export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col gap-2 bg-primary px-0 lg:px-grid-x">
			{children}
		</main>
	);
}
