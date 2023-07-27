type PropsType = {
    text: string;
}

export const Pill = ({text}: PropsType) => {
    return <p className="rounded-lg bg-slate-600 text-center  px-2 py-1 h-min">{text}</p>

}