import StudySpaceFinder from "public/StudySpaceFinder.png"
import mtg from "public/mtg.png"
import ai from "public/ai.png"
import Image, { StaticImageData } from "next/image";
import { FunctionComponent, useState } from "react";

type PropTypes = {
  selected: boolean;
}

type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({ image, title, demoLink, codeLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className={`relative flex aspect-video bg-gray-200 transition-all duration-400 delay-100`}>
        <Image src={image} alt={title} className="w-full h-full" />
        <div className={`absolute z-10 md:inset-0 h-full bg-black bg-opacity-80 flex flex-col items-center justify-center text-white ${isVisible ? 'opacity-100' : 'opacity-0'} md:hover:opacity-100 transition-opacity duration-400 aspect-video`}>
          <div className="w-full h-full p-4 2xl:p-8 flex flex-col justify-center">
            <h3 className="text-lg 2xl:text-xl font-bold text-center">{title}</h3>
            <div className="flex w-full items-center justify-center gap-2 my-4">
              <a href={demoLink} target="_blank" rel="noreferrer" className="rounded p-2 text-white bg-blue-700 hover:cursor-pointer hover:bg-blue-600 hover:scale-[105%]">Demo</a>
              <a href={codeLink} target="_blank" rel="noreferrer" className="rounded p-2 text-white bg-blue-700 hover:cursor-pointer hover:bg-blue-600 hover:scale-[105%]">Code</a>
            </div>
          </div>
        </div>
      </div>
      {/* Show this button only on smaller screens */}
      <button className="md:hidden mt-2" onClick={() => setIsVisible(!isVisible)}>Toggle Details</button>
    </div>
  );
};


export const Projects = ({ selected }: PropTypes) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative w-full md:w-screen md:right-0 h-full flex flex-col items-center justify-center text-sm 2xl:text-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-2/3 md:w-2/3 p-10 pb-4 md:my-4">
      
        <div className="md:col-span-2 md:row-span-2 rounded overflow-hidden">
        <div className="relative flex aspect-[3/2] bg-gray-200 transition-all duration-400 delay-100">
          <Image src={StudySpaceFinder} alt="StudySpaceFinder" className="w-full h-auto" />
          <div className={`absolute z-10 inset-0 h-full bg-black bg-opacity-80 flex items-center justify-center text-white ${isVisible ? 'opacity-100' : 'opacity-0'} md:hover:opacity-100 transition-opacity duration-400`}>
            <div>
              <h3 className="text-xl 2xl:text-2xl font-bold text-center">StudySpaceFinder</h3>
              <p className="px-8 mt-4 mx-auto hidden md:block">StudySpaceFinder is a website that shows empty classrooms around the University of Victoria. This project was done through the programming club Vikelabs, where I lead a team of 4 through the process of designing a functional website, from the initial idea and user research through to the finished product. The front end is built in React, and the server is written in Go</p>
              <div className="flex w-full items-center justify-center gap-4 my-4">
                <a target="_blank" rel="noreferrer"  href="https://studyspace.vikelabs.ca" className="rounded p-2 text-white  bg-blue-600 hover:cursor-pointer hover:bg-blue-700 hover:scale-[105%]">Demo</a>
                <a target="_blank" rel="noreferrer"  href="http://github.com/Vikelabs/StudySpaceFinder" className="rounded p-2 text-white  bg-blue-600 hover:cursor-pointer hover:bg-blue-700 hover:scale-[105%]">Code</a>
              </div>
            </div>
          </div>
        </div>
        <button className="md:hidden mt-2" onClick={() => setIsVisible(!isVisible)}>Toggle Details</button>

      </div>
      
      <ProjectCard
        image={mtg}
        title="MTG Card Search App"
        demoLink="https://mtg-search-app.vercel.app"
        codeLink="http://github.com/Scott-Kenning/mtg-app"
      />
      <ProjectCard
        image={ai}
        title="AI Blog Generator"
        demoLink="https://blog-post-generator.vercel.app"
        codeLink="http://github.com/Scott-Kenning/blog-post-generator"
      />
      </div>
      <p className="italic text-base text-left md:my-4 2xl:text-xl">See all my projects on my <a href="https://github.com/Scott-Kenning" target="blank" rel="noreferrer" className="underline">Github</a></p>
    </div>
  );
};
