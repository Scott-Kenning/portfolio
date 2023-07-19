import heroImage from "public/undraw_developer_activity_re_39tg.svg"
import Image from "next/image";

type PropTypes = {
  selected: boolean;
}

export const Projects = ({selected}: PropTypes) => {
    return (
          <div className="grid grid-cols-1 md:grid-cols-3 md:h-3/4 md:w-auto w-full mt-24 p-4 md:aspect-video m-auto md:gap-2 gap-6 text-base">
              <div className={`shadow-lg shadow-yellow-200 md:shadow-none flex md:aspect-auto aspect-video md:row-span-2 md:col-span-2 h-full bg-gray-400 text-opacity-0 ${selected ? "transition-all duration-400 delay-100 hover:brightness-50 hover:text-opacity-100" : ""}`}>
                <p className="text-white"> {selected}</p>
              </div>
              <div className="flex aspect-video h-full bg-gray-400  hover:brightness-50 transition-all duration-400"> </div>
              <div className="flex aspect-video h-full bg-gray-400  hover:brightness-50 transition-all duration-400"> </div>
              <div className="flex aspect-video h-full bg-gray-400  hover:brightness-50 transition-all duration-400"> </div>
              <div className="flex aspect-video h-full bg-gray-400  hover:brightness-50 transition-all duration-400"> </div>
              <div className="flex aspect-video h-full bg-gray-400  hover:brightness-50 transition-all duration-400"> </div>
          </div>
    )
}
