import StudySpaceFinder from "public/StudySpaceFinder.png";
import mtg from "public/mtg.png";
import ai from "public/ai.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  shortDescription: string;
  link: string;
  image: StaticImageData;
};

type ProjectLinkProps = {
  project: Project;
  onSelect: () => void;
  isSelected: boolean;
};

const ProjectLink = ({ project, onSelect, isSelected }: ProjectLinkProps) => {
  return (
    <div
      onClick={onSelect}
      className={`w-full flex justify-between md:text-xl cursor-pointer p-2 ${isSelected ? 'bg-slate-600' : 'hover:bg-slate-600/0'} rounded`}
    >
      <h3 className={`text-white`}>{project.title}</h3>
      <p className={`text-gray-400`}>{project.shortDescription}</p>
    </div>
  );
};

const ProjectCard = ({ project, show }: { project: Project; show: boolean }) => {
  return (
    <div className={`flex flex-col gap-2 transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0'} h-full overflow-hidden gap-4`}>
      <h3 className="font-bold text-lg lg:text-xl">{project.title}</h3>
      <p className="text-base h-min">{project.description}</p>
      <div className="flex w-full"> {/* Adjust height as necessary */}
        <a className="flex-none w-[100%] md:w-1/2 h-full" href={project.link}> {/* This will control the size of the image */}
          <img src={project.image.src} alt={project.title} className="w-full h-full object-contain" />
        </a>
      </div>
    </div>
  );
};




export const Projects = () => {
  const projectData: Project[] = [
    {
      title: "StudySpaceFinder",
      shortDescription: "Classroom finder",
      description: "StudySpaceFinder is a website that shows empty classrooms around the University of Victoria. This project was done through the programming club Vikelabs, where I lead a team of 3 through the process of designing a functional website, from the initial idea and user research through to the finished product. The front end is built in React, and the server is written in Go",
      link: "https://studyspace.vikelabs.ca",
      image: StudySpaceFinder,
    },
    {
      title: "MTG Card Search",
      shortDescription: "Card Database",
      description: "Classroom finder",
      link: "https://studyspace.vikelabs.ca",
      image: mtg,
    },
    {
      title: "Blog Generator",
      shortDescription: "OpenAI Integration",
      description: "Classroom finder",
      link: "https://studyspace.vikelabs.ca",
      image: ai,
    },
  ];


  const [selectedProject, setSelectedProject] = useState<Project>(projectData[0]);
  const [showCard, setShowCard] = useState(true);

  const selectProject = (project: Project) => {
    if (selectedProject.title !== project.title) {
      setShowCard(false);
      setTimeout(() => {
        setSelectedProject(project);
        setShowCard(true);
      }, 200);
    }
  };

  return (
    <div className="relative w-screen h-full flex flex-col items-center justify-start mt-40 md:mt-0 md:justify-center text-sm 2xl:text-lg">
      <div className="grid md:grid-cols-5 md:h-1/2 w-4/5 gap-8 md:gap-16">
        <div className="flex flex-col h-min my-auto col-span-2 gap-2">
          <h3 className="text-xl text-gray-300 py-1 px-2 border-b-2">Projects</h3>
          {projectData.map((project, index) => (
            <ProjectLink
              key={index}
              project={project}
              onSelect={() => selectProject(project)}
              isSelected={selectedProject.title === project.title && showCard}
            />
          ))}
        </div>
        <div className="md:col-span-3">
          <ProjectCard
            project={selectedProject}
            show={showCard}
          />
        </div>
      </div>
    </div>
  );
};