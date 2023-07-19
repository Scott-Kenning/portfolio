import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

type BoxProps = {
  title: string
  selected: string | null
  onClick: () => void
  children?: any
}

export const Box: React.FC<BoxProps> = ({ title, selected, onClick, children }) => {
  const isSelected = selected === title;
  
  let boxClasses = "text-4xl text-white grid place-items-center transition-all duration-500 relative ";

  if (isSelected) {
    boxClasses += "md:w-full h-full bg-slate-700 md:overflow-hidden overflow-auto";
  } else if (selected) {
    boxClasses += "text-transparent md:w-0 h-0 bg-slate-600 md:h-full overflow-hidden";
  } else {
    boxClasses += "cursor-pointer bg-slate-600 hover:bg-slate-700 w-full md:h-full h-1/3 overflow-hidden";
  }

  return (
    <div className={boxClasses} onClick={!isSelected ? onClick : undefined}>
      <p className={`absolute items-center font-bold whitespace-nowrap transition-opacity duration-500 ${isSelected ? "transition-none opacity-0" : "opacity-100"}`}>{title}</p>
          
      {isSelected && <div className={`z-20 absolute left-4 top-4 cursor-pointer text-base transition-none ${isSelected ? "opacity-100" : "opacity-0"}`} onClick={onClick}>
            <FaArrowLeft size="3em" className='fixed text-neutral-200 drop-shadow-lg shadow-white'/>
          </div>}
      <div className={`absolute inset-0 grid place-items-center transition-opacity ease-in duration-500 z-10 ${isSelected ? "opacity-100" : "hover:opacity-[3%] duration-[100ms] opacity-0"}`}>
        <div className="relative w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}
