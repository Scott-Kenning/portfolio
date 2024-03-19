import Image, { StaticImageData } from "next/image";

type ItemProps = {
  date: string,
  title: string,
  description: string,
  imageSrc: StaticImageData,
}

type TimelineProps = {
  children: React.ReactNode
}

export const TimelineItem = ({ date, title, description, imageSrc }: ItemProps) => {
  return (
    <div className={`top-1/2 h-100 px-8 w-full h-100 max-w-xl items-center justify-center md:flex flex-col gap-12 text-sm 2xl:text-lg`}>
      <div className={`flex flex-col justify-end h-ful mt-auto h-48 hidden md:flex w-full items-center justfy-center gap-4`}>
        <Image src={imageSrc} alt={title} width={100} height={100} className="w-40 2xl:w-56"/>
        <p className="font-bold">{date}</p>
      </div>
      <div className="hidden md:block rounded-full bg-white h-4 w-4 absolute"></div>
      <div className="h-48 w-full h-100 flex flex-col text-left">
        <h2 className="w-full font-bold text-base 2xl:text-2xl h-min text-left md:mb-3">{title}</h2>
        <p className="font-bold block md:hidden text-neutral-300 w-full border-b border-slate-500 mb-2 p-1 pl-0">{date}</p>
        <p className="w-full text-neutral-200 h-2/3">{description}</p>
      </div>
    </div>
  );
};


export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="absolute flex flex-col md:flex-row w-screen justify-center text-base mt-48 md:mt-0 md:px-12 py-0 pt-16 md:py-24 gap-12 md:gap-24 md:gap-0">
      <div className="hidden md:block h-1 bg-white absolute w-full top-1/2 left-0"></div>
      {children}
    </div>
  )
}
