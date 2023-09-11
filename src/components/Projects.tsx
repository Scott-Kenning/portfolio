import StudySpaceFinder from "public/StudySpaceFinder.png"
import mtg from "public/mtg.png"
import ai from "public/ai.png"
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

type PropTypes = {
  selected: boolean;
}

type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ image, title, demoLink, codeLink }) => {
  return (
    <div>
      <div className={`relative flex aspect-video bg-gray-200 transition-all duration-400 delay-100`}>
        <Image src={image} alt={title} className="w-full h-full" />
        <div className="md:absolute md:inset-0 h-full bg-black bg-opacity-70 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-400">
          <div className="w-full h-full p-4">
            <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
            <div className="flex w-full items-center justify-center gap-4 my-4">
              <a href={demoLink} target="_blank" className="rounded p-1 text-white text-sm bg-blue-700 hover:cursor-pointer hover:bg-blue-600">Demo</a>
              <a href={codeLink} target="_blank" className="rounded p-1 text-white text-sm bg-blue-700 hover:cursor-pointer hover:bg-blue-600">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ selected }: PropTypes) => {
  return (
    <div className="relative md:absolute w-full md:w-screen md:right-0 h-full flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-2/3 w-2/3 p-4 m-4">
      
        <div className="md:col-span-2 md:row-span-2 rounded overflow-hidden">
        <div className={`relative flex aspect-[3/2] bg-gray-200 transition-all duration-400 delay-100`}>
          <Image src={StudySpaceFinder} alt="StudySpaceFinder" className="w-full h-auto" />
          <div className="md:absolute md:inset-0 h-full bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
            <div>
              <h3 className="text-xl font-bold text-center">StudySpaceFinder</h3>
              <p className="text-sm mt-4 w-3/4 mx-auto">StudySpaceFinder is a website that shows empty classrooms around the University of Victoria. This project was done through the programming club Vikelabs, where I lead a team of 4 through the process of designing a functional website, from the initial idea and user research through to the finished product. The front end is built in React, and the server is written in Go</p>
              <div className="flex w-full items-center justify-center gap-4 my-4">
                <a target="_blank" href="https://studyspace.vikelabs.ca" className="rounded p-1 text-white text-sm bg-blue-700 hover:cursor-pointer hover:bg-blue-600">Demo</a>
                <a target="_blank" href="http://github.com/Vikelabs/StudySpaceFinder" className="rounded p-1 text-white text-sm bg-blue-700 hover:cursor-pointer hover:bg-blue-600">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProjectCard
        image={mtg}
        title="MTG Card Searcg App"
        demoLink="https://mtg-search-app.vercel.app"
        codeLink="http://github.com/Scott-Kenning/mtg-app"
      />
      <ProjectCard
        image={ai}
        title="AI Blog Creation website"
        demoLink="https://blog-post-generator.vercel.app"
        codeLink="http://github.com/Scott-Kenning/blog-post-generator"
      />
      </div>
      <p className="italic text-base text-left my-4">See all my projects on my <a href="https://github.com/Scott-Kenning" target="blank" rel="noreferrer" className="underline">Github</a></p>
    </div>
  );
};
