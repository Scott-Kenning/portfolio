import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from "react-icons/fa";

type BoxProps = {
  title: string
  selected: string | null
  onClick: () => void
  children?: any
  borderClass?: string;
}

export const Box: React.FC<BoxProps> = ({ title, selected, onClick, children, borderClass }) => {
  const isSelected = selected === title;
  const [isRendered, setIsRendered] = useState(false);
  
  let boxClasses = "text-3xl text-white grid place-items-center transition-all duration-500 relative ";

  if (isSelected) {
    boxClasses += "md:w-full h-full bg-slate-700 md:overflow-hidden overflow-auto";
  } else if (selected) {
    boxClasses += "text-transparent md:w-0 h-0 bg-slate-600 md:h-full overflow-hidden";
  } else {
    boxClasses += "cursor-pointer bg-slate-600 hover:text-4xl hover:bg-slate-700 w-full md:h-full h-1/3 overflow-hidden";
  }

  useEffect(() => {
    if (isSelected) {
      const timer = setTimeout(() => {
        setIsRendered(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsRendered(false);
    }
  }, [isSelected]);

  return (
    <div className={`${boxClasses} ${!isRendered && borderClass}`} onClick={!isSelected ? onClick : undefined}>
      {!isSelected && <p className='absolute items-center font-bold opacity-100 whitespace-nowrap'>{title}</p> }
          {/* <div className={`absolute inset-0 grid place-items-center transition-opacity duration-1000 z-10`}> */}

          {isRendered && <div className={`z-20 absolute left-4 top-4 cursor-pointer text-base  ${isRendered ? "opacity-100" : "opacity-0"}`} onClick={onClick}>
            <FaArrowLeft size="3em" className='text-neutral-200 drop-shadow-lg shadow-white'/>
          </div>}
          <div className={`absolute inset-0 grid place-items-center transition-opacity ease-in duration-300 z-10 ${isRendered ? "opacity-100" : "hover:opacity-[4%] opacity-0"}`}>
            <div className="relative w-full h-full flex items-center justify-center">
              {children}
            </div>
          </div>
    </div>
  )
}




