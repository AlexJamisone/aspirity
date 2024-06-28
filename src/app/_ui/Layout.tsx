export default function Layout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col gap-4 bg-primary px-0 pb-[92px] lg:px-grid-x">
			{children}
		</main>
	);
}
