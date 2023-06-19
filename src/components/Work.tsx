import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components"
import { Card } from "./Card"
import { Divider } from "./Divider"
import Image from "next/image"
import image from "public/undraw_web_developer_re_h7ie.svg"
import testingImage from "public/undraw_split_testing_l1uw.svg"
import AIImage from "public/undraw_firmware_re_fgdy.svg"


export const Work = () => {
    return (
<div className="grid grid-cols-1 md:grid-cols-[1fr_3px_1fr] text-white md:p-6">
    <div className="flex flex-col items-center md:items-end">
        <div className="col-span-1 m-5 mt-0">
            <p className="font-bold">January - April 2022</p>
        </div>
        <Image src={image} alt="Leanpub Image 1" width={200} height={200} className="m-8 mt-0 shadow hidden md:block"/>
    </div>
  <div className="col-span-1 relative bg-white">
    <div className="hidden md:block absolute top-0 left-1/2 w-[15px] h-[15px] bg-white rounded-full transform -translate-x-1/2"></div>
  </div>
  <div className="col-span-1 md:mx-5 mb-5 p-6 pr-0 bg-slate-700 shadow rounded-lg">
    <h2 className="font-bold text-lg mb-3">Leanpub - Front End Developer Co-op</h2>
    <p className="leading-7">
      In my first co-op, I was a developer for the website <a href="https://leanpub.com" target="blank" className="text-blue-400 hover:text-blue-300 hover:scale-102">Leanpub</a>. Throughout the co-op I    </p>
  </div>
  <div className="col-span-1 m-5 mt-16 text-center md:hidden">
      <p className="font-bold">September - December 2022</p>
  </div>
  <div className="col-span-1 md:mx-5 mb-5 p-6 bg-slate-700 shadow-md rounded-lg">
    <h2 className="font-bold text-lg mb-3">PolicyMe - Software Testing Co-op</h2>
    <p className="leading-7">
      This is some more filler text
    </p>
  </div>
  <div className="col-span-1 relative bg-white">
    <div className="absolute top-0 left-1/2 w-[15px] h-[15px] bg-white rounded-full transform -translate-x-1/2"></div>
  </div>
  <div className="flex flex-col">
      <div className="col-span-1 mx-5 mb-5 hidden md:block">
          <p className="font-bold">September - December 2022</p>
      </div>
      <Image src={testingImage} alt="Leanpub Image 1" width={200} height={200} className="m-8 mt-0 shadow"/>
  </div>
    <div className="flex flex-col items-end">
        <div className="col-span-1 mx-5 mb-5">
            <p className="font-bold">May - August 2023</p>
        </div>
        <Image src={AIImage} alt="Leanpub Image 1" width={200} height={200} className="m-8 mt-0 shadow"/>
    </div>
  <div className="col-span-1 relative bg-white">
    <div className="absolute top-0 left-1/2 w-[15px] h-[15px] bg-white rounded-full transform -translate-x-1/2"></div>
  </div>
  <div className="col-span-1 mx-5 mb-5 p-6 pr-0 bg-slate-700 shadow rounded-lg">
    <h2 className="font-bold text-lg mb-3">Leanpub - Full Stack Developer Co-op</h2>
    <p className="leading-7">
      In my first co-op, I was a developer for the website <a href="https://leanpub.com" target="blank" className="text-blue-400 hover:text-blue-300 hover:scale-102">Leanpub</a>. Throughout the co-op I    </p>
  </div>
</div>
    )
}