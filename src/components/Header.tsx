import { useState } from "react"

export const Header = (props: {handleClick: Function}) => {
    const [darkMode, setDarkMode] = useState(true);

    const onClick = () => {
        props.handleClick();
        setDarkMode(!darkMode)
    }

    return (
        <div className="flex w-full h-16 items-center justify-end px-8">
            <ul className="flex w-100 space-x-8 px-8">
                <li>Projects</li>
                <li>Experience</li>
                <li>Classes</li>
                <li>Contact</li>
            </ul>
            <button 
                className="flex bg-gray-400 hover:cursor-pointer w-16 h-8 rounded-3xl items-center p-1"
                onClick={() => onClick()}
            >
                <div className="bg-gray-300 rounded-3xl w-6 h-6 animate-toggleLeft dark:animate-toggleRight dark:translate-x-8"/>
            </button>
            <p className="m-2 w-8">{darkMode ? "Dark" : "Light"}</p>
        </div>
    )
}