import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

type BoxProps = {
  title: string
  selected: string | null
  onClick: () => void
  children?: any
}

export const Box: React.FC<BoxProps> = ({ title, selected, onClick, children }) => {
  const isSelected = selected === title
  let boxClasses = "overflow-hidden text-white flex flex-grow items-center justify-center transition-all duration-500 ";

  if (isSelected) {
    boxClasses += "md:w-full h-full bg-slate-700 ";
  } else if (selected) {
    boxClasses += "text-transparent md:w-0 h-0 bg-slate-600 md:h-full overflow-hidden ";
  } else {
    boxClasses += "cursor-pointer bg-slate-600 hover:bg-slate-700 w-full md:w-1/3 md:h-full h-1/3";
  }

  return (
    <div className={boxClasses} onClick={!isSelected ? onClick : undefined}>
      {!isSelected && <p className='text-3xl'>{title}</p> }
      {isSelected && 
        <>
          <div className="absolute top-20 left-4 cursor-pointer" onClick={onClick}>
            <FaArrowLeft size="3em" className='text-neutral-200 drop-shadow-xl'/>
          </div>
          {children}
        </>
      }
    </div>
  )
}
