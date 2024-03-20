import StudySpaceFinder from "public/StudySpaceFinder.png";
import portfolio from "public/portfolio.png";
import mtg from "public/mtg.png";
import ai from "public/ai.png";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Pill } from "./Pill";

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
      <div className="flex w-full">
        <a className="m-1 flex-none w-[100%] md:w-2/3 h-full hover:opacity-80 hover:cursor-pointer transition-all duration-200" href={project.link} target="_blank" rel="noreferrer">
          <img src={project.image.src} alt={project.title} className="w-full h-full object-contain" />
        </a>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="w-24 text-center flex rounded-lg bg-blue-600 hover:bg-blue-600/80 text-center px-4 py-1 h-min font-mono transition-all duration-200">Demo →</a>
    </div>
  );
};




export const Projects = () => {
  const projectData: Project[] = [
    {
      title: "StudySpaceFinder",
      shortDescription: "Full Stack",
      description: "StudySpaceFinder is a website that highlights empty classrooms around the University of Victoria. This project was done through the programming club Vikelabs, where I lead a team of 3 through the process of designing a functional website, from the initial idea and user research through to the finished product. The original inspiration stemmed from a constant struggle of finding an empty table during peak hours at the university. The front end is built in React, and the server is written in Go",
      link: "https://studyspace.vikelabs.ca",
      image: StudySpaceFinder,
    },
    {
      title: "MTG Card Search",
      shortDescription: "Full Stack",
      description: "As an avid Magic: The Gathering player, I wanted to create a website that was involved with my hobby. MTG Card Search is a card database that shows details about all existing magic cards, including stuff that I couldn't find on existing websites such as what formats the cards are legal to be played in. This website was an experiment with Angular and the database is hosted on Supabase. All of the data was taken from the Scryfall API.",
      link: "https://mtg-search-app.vercel.app",
      image: mtg,
    },
    {
      title: "Portfolio",
      shortDescription: "Front End",
      description: "Look familiar? This portfolio was created using exclusively using NextJS and TailwindCSS. All the animations were done exclusively with Tailwind, no additional libraries or regular css transitions were used. The first iterations of the website took some pretty heavy inspiration from existing portfolios, but the final version was my original design. The images are all taken from Undraw.",
      link: "https://scottkenning.ca",
      image: portfolio,
    },
    {
      title: "Blog Generator",
      shortDescription: "OpenAI",
      description: "One of my smaller projects, this website uses OpenAI's GPT-4 to generate blog posts. This project was made to showcase my experience with OpenAI, and how iterative prompting with even the simplest level of feedback can greatly refine the output. After realizing the utility that AI can offer while at Leanpub, I have been using AI tools extensively to aid in development, and to help with my day to day tasks.",
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
      <div className="grid lg:grid-cols-5 lg:h-2/3 max-h-1/2 w-full md:w-4/5 p-4 gap-8 lg:gap-16">
        <div className="flex flex-col my-auto col-span-2 gap-2 h-full ">
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
        <div className="lg:col-span-3 h-full w-100">
          <ProjectCard
            project={selectedProject}
            show={showCard}
          />
        </div>
      </div>
    </div>
  );
};