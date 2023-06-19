import { useState } from "react"

export const Header = (props: {handleClick: Function}) => {
    const [darkMode, setDarkMode] = useState(true);

    const onClick = () => {
        props.handleClick();
        setDarkMode(!darkMode)
    }

    return (
        <div className="invisible md:visible flex w-full h-16 items-center justify-end px-8">
            <ul className="flex w-100 space-x-8 px-8">
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}