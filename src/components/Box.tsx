import React, { useEffect, useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Image from 'next/image';
import BusinessMan from "public/undraw_businessman_unxs.svg"
import Profile from "public/undraw_certificate_re_yadi.svg"
import Project from "public/undraw_feeling_proud_qne1.svg"

type BoxProps = {
  title: string
  selected: string | null
  onClick: () => void
  children?: any
}

export const Box: React.FC<BoxProps> = ({ title, selected, onClick, children }) => {
  const isSelected = selected === title;
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (boxRef.current && !isSelected) {
      boxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isSelected]);

  let boxClasses = "text-3xl flex items-center justify-center grid transition-all duration-500 relative ";

  if (isSelected) {
    boxClasses += "md:w-full h-full bg-slate-700 md:overflow-hidden overflow-auto";
  } else if (selected) {
    boxClasses += "text-transparent md:w-0 h-0 bg-slate-600 md:h-full overflow-hidden";
  } else {
    boxClasses += "cursor-pointer bg-slate-600 hover:bg-slate-700 md:w-full md:h-full h-1/3 overflow-hidden";
  }

  return (
    <div ref={boxRef} className={boxClasses} onClick={!isSelected ? onClick : undefined}>
      <div className={`w-full items-center flex flex-col justify-center transition-opacity duration-200 md:duration-500 ${isSelected ? "duration-100 md:duration-200 opacity-0" : "opacity-100"}`}>

        <Image src={title == "Work" ? BusinessMan : title == "About" ? Profile : Project} alt={title} className="h-24 md:h-36 w-52 2xl:h-48 2xl:w-72" />
        <p className={`items-center my-4 font-bold whitespace-nowrap text-xl 2xl:text-3xl`}>{title}</p>
      </div>
      {isSelected && <div className={`z-20 absolute left-4 top-4 cursor-pointer text-base transition-none ${isSelected ? "opacity-100" : "opacity-0"}`} onClick={onClick}>
            <FaArrowLeft size="3em" className='fixed text-neutral-200 drop-shadow-lg shadow-white'/>
          </div>}
      <div className={`absolute inset-0 grid place-items-center transition-opacity ease-in duration-500 z-10 ${isSelected ? "opacity-100" : "hover:opacity-[0%] duration-[100ms] opacity-0 -z-10"}`}>
        <div className="relative w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}
