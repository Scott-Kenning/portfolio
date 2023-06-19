import { AnimationOnScroll } from "react-animation-on-scroll"
import { ImageContainer } from "./ImageContainer"

export const ProjectCard = () => {
    return (
        <div className="p-2 snap-always snap-center flex flex-wrap md:flex-nowrap shadow-lg bg-slate-700 rounded-lg md:h-72 max-w-96 font-Lato transition ease-in-out duration-1000">
            <ImageContainer>
                <img src="/SSF.jpg" alt="UVic Study Space Finder" className="h-full rounded-xl"/>
            </ImageContainer>
            <div className="flex flex-col items-center w-100">
                <h3 className='text-xl w-100 p-4'> UVic Study Space Finder - Vikelabs</h3>
                <div className='w-full max-w-xl p-4 bg-red'>
                <p> Study Space Finder is a project created to help students find empty classes
                    that are available for studying on campus. Leading a team of 3 other students,
                    we created SSF which uses react on the front end and FastAPI on the backend.
                </p>
                <a 
                    href="https://google.ca" 
                    target="blank" 
                    className='font-mono text-blue-600 dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-400'
                >
                    View Project
                </a>
                </div>
            </div>
        </div>
    )
}