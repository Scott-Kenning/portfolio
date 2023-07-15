import React from 'react';
import Image from 'next/image';

interface EventProps {
  title: string;
  image: string;
  description: string;
  skills: string[];
  isReverse?: boolean;
}

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-1 relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute w-[0.5%] h-full right-1/2 bg-white"></div>
      {children}
    </div>
  );
}

const Event: React.FC<EventProps> = ({ title, image, description, skills, isReverse }) => {
  return (
    <div className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} w-full mb-12 col-span-2 w-full gap-8`}>
      <div className="w-[48%]">
        <Image src={image} alt="Leanpub Image 1" width={200} height={200} className="m-8 mt-0 shadow hidden md:block"/>
      </div>
      <div className="w-full bg-slate-600 p-4 rounded-lg text-white">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="mb-2">{description}</p>
        <div className="flex flex-wrap">
          {skills.map((skill, i) => (
            <span key={i} className="mr-2 mb-2 bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Timeline, Event };
