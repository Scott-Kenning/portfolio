type PropsType = {
    children: React.ReactNode;
}

export const Pill = ({children}: PropsType) => {
    return <p className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min font-mono">{children}</p>
}