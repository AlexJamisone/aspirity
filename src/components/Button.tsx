export default function Button({
        children
        }: React.PropsWithChildren) {
    return (
        <button className="uppercase font-semibold text-sm bg-accent hover:bg-accent-hov text-primary-txt focus:bg-accent-focuse rounded px-4 py-[10px] flex gap-2">
            {children} 
        </button>
    )
}
