import Image from "next/image";
import { Pill } from "./Pill";

export const TimelineItem = ({ date, title, description, imageSrc, skills = [], reverse = false }) => {
  return (
    <div className={`h-100 top-1/2 px-8 w-full max-w-xl flex flex-col items-center justify-center md:gap-12 ${reverse && 'md:flex-col-reverse'}`}>
      <div className={`hidden md:block h-1/2 w-full flex items-center gap-4 ${reverse ? 'md:flex-col' : 'md:flex-col-reverse'}`}>
        <p className="font-bold">{date}</p>
        <Image src={imageSrc} alt={title} width={200} height={200} className=""/>
      </div>
      <div className="hidden md:block rounded-full bg-white h-4 w-4 absolute"></div>
      <div className={`w-full h-1/2 text-white flex ${ reverse && "justify-end"} flex-col text-left`}>
        <h2 className="w-full font-bold text-2xl h-min text-left md:mb-3 h-1/12">{title}</h2>
        <p className="font-bold block md:hidden text-neutral-300">{date}</p>
        <p className="w-full text-neutral-200 h-2/3">{description}</p>
      </div>
    </div>
  );
};

export const Timeline = ({ children }) => {
  return (
    <div className="relative flex flex-col md:flex-row w-screen md:h-[70%] justify-center text-base md:px-32 py-24 md:py-0 gap-12 md:gap-0">
      <div className="hidden md:block h-1 bg-white absolute w-full top-1/2 left-0"></div>
      {children}
    </div>
  )
}
