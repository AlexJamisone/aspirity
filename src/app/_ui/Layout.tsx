export default function Layout({children}: React.PropsWithChildren) {
    return (
        <main className="flex px-grid-x size-full">
            {children}
        </main>
    )
}
