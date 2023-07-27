import StudySpaceFinder from "public/StudySpaceFinder.png"
import PortfolioV1 from "public/PortfolioV1.png"
import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

type PropTypes = {
  selected: boolean;
}

type ProjectCardProps = {
  image: StaticImageData;
  description: string;
  title: string;
  link: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ image, description, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={`relative flex aspect-video bg-gray-200 transition-all duration-400 delay-100`}>
        <Image src={image} alt={title} className="w-full h-full" />
        <div className="md:absolute md:inset-0 h-full bg-black bg-opacity-90 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-400">
          <div className="w-full h-full p-4">
            <h3 className="text-xl font-bold text-center">{title}</h3>
            <p className="text-base mt-2 mx-auto">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export const Projects = ({ selected }: PropTypes) => {
  return (
    <div className="relative md:absolute w-full md:w-screen md:right-0 h-full flex flex-col items-center justify-center p-4">
      <p>Featured Project</p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:aspect-video gap-4 md:h-2/3 p-4">
      
        <a href="https://studyspace.vikelabs.ca" target="_blank" rel="noopener noreferrer" className="col-span-2 row-span-2 rounded overflow-hidden">
        <div className={`relative flex aspect-video bg-gray-200 transition-all duration-400 delay-100`}>
          <Image src={StudySpaceFinder} alt="StudySpaceFinder" className="w-full h-auto" />
          <div className="md:absolute md:inset-0 h-full bg-black bg-opacity-90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-400">
            <div>
              <h3 className="text-3xl font-bold text-center">StudySpaceFinder</h3>
              <p className="text-base mt-4 w-3/4 mx-auto">StudySpaceFinder is a website that shows empty classrooms around the University of Victoria. This project was done through the programming club Vikelabs, where I lead a team of 4 through the process of designing a functional website, from the initial idea and user research through to the finished product. The front end is built in React, and the server is writtin in Go</p>
            </div>
          </div>
        </div>
      </a>
      
      {/* <ProjectCard
        image={PortfolioV1}
        description="This was my first portfolio I made right after I started learning web development. I like to think I've improved since then"
        title="Portfolio v1"
        link="https://scott-kenning.github.io/"
      />
      <ProjectCard
        image={StudySpaceFinder}
        description="StudySpaceFinder is a website"
        title="StudySpaceFinder"
        link="https:/studyspace.vikelabs.ca"
      />
      <ProjectCard
        image={StudySpaceFinder}
        description="StudySpaceFinder is a website"
        title="StudySpaceFinder"
        link="https:/studyspace.vikelabs.ca"
      />
      <ProjectCard
        image={StudySpaceFinder}
        description="StudySpaceFinder is a website"
        title="StudySpaceFinder"
        link="https:/studyspace.vikelabs.ca"
      />
      <ProjectCard
        image={StudySpaceFinder}
        description="StudySpaceFinder is a website"
        title="StudySpaceFinder"
        link="https:/studyspace.vikelabs.ca"
      /> */}
      </div>
      <p className="italic text-base text-left my-4">This page is still in development. For now, checkout my <a href="https://github.com/Scott-Kenning" target="blank" className="underline">Github</a></p>
    </div>
  );
};
