import Image from "next/image";
import { Pill } from "./Pill";

export const TimelineItem = ({ date, title, description, imageSrc, skills = [], reverse = false }) => {
  return (
    <div className={`timeline-item md:grid md:grid-flow-col md:grid-cols-3 md:gap-4 items-center md:items-start ${reverse ? 'md:grid-flow-col-reverse text-right' : ''}`}>
      <div>
        <p className="font-bold">{date}</p>
        <Image src={imageSrc} alt={title} width={200} height={200} className="my-8 hidden md:block"/>
      </div>
      <div className="timeline-marker md:absolute md:mx-auto bg-white w-3 h-3 md:w-3 md:h-3 rounded-full"></div>
      <div className="timeline-content mx-5 p-6 pr-0 bg-slate-700 rounded-lg md:mt-8">
        <h2 className="font-bold text-lg mb-3">{title}</h2>
        <p className="leading-7">{description}</p>
        <div className='w-100 flex flex-wrap-reverse gap-2 justify-end items-start font-mono'>
          {skills.map(skill => <Pill key={skill} text={skill} />)}
        </div>
      </div>
    </div>
  )
}
