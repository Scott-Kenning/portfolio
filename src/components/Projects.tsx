import heroImage from "public/undraw_developer_activity_re_39tg.svg"
import Image from "next/image";

type PropTypes = {
  selected: boolean;
}

export const Projects = ({selected}: PropTypes) => {
    return (
          <div className="grid grid-cols-1 md:grid-cols-3 h-3/4 md:aspect-video m-auto bg-gray-600 gap-2 text-base">
              <div className={`flex md:aspect-auto aspect-video md:row-span-2 md:col-span-2 h-full bg-gray-400 text-opacity-0 ${selected ? "transition-all duration-400 delay-100 hover:brightness-50 hover:text-opacity-100" : ""}`}>
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
