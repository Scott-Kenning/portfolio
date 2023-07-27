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
    <div className={`h-100 top-1/2 px-8 w-full max-w-xl flex flex-col items-center justify-center md:gap-12 `}>
      <div className={`hidden md:flex h-full w-full flex-col items-center justify-end gap-4`}>
        <Image src={imageSrc} alt={title} width={200} height={200} className=""/>
        <p className="font-bold">{date}</p>
      </div>
      <div className="hidden md:block rounded-full bg-white h-4 w-4 absolute"></div>
      <div className={`w-full h-full flex flex-col text-left`}>
        <h2 className="w-full font-bold text-2xl h-min text-left md:mb-3">{title}</h2>
        <p className="font-bold block md:hidden text-neutral-300 w-full border-b border-slate-500 my-2 p-1 pl-0">{date}</p>
        <p className="w-full text-neutral-200 h-2/3">{description}</p>
      </div>
    </div>
  );
};


export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="relative flex flex-col md:flex-row w-screen md:h-[70%] justify-center text-base md:px-32 py-24 md:py-0 gap-24 md:gap-0">
      <div className="hidden md:block h-1 bg-white absolute w-full top-1/2 left-0"></div>
      {children}
    </div>
  )
}
