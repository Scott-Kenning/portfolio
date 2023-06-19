import Image from 'next/image'
import aboutImage from "public/undraw_drink_coffee_jdqb.svg"

export const About = () => {
    return (
        <div className="flex flex-col items-center md:flex-row gap-16">
              <Image src={aboutImage} alt="Scott Kenning" width={300} height={300} className="rounded-full bg-slate-700 shadow h-min"/>
              <div className="flex flex-col bg-slate-700 w-100 rounded-lg shadow-lg p-4 gap-y-4">
                <p>My name's Scott, and I'm a third year Software Engineering student at the University of Victoria. I specialize in web development (Particularily React and Tailwind), but I enjoy any sort of programming.</p>
                <p>I'm a team lead for <a href="/" className='font-semibold'>Vikelabs</a>, leading a group of other students to create StudySpaceFinder, a website by UVic students, for UVic students.</p>
                <p>Outside of the world of computers, I enjoy hiking, nature, and the occasional round of golf.</p>
                
                <div className='h-full w-100 flex flex-wrap-reverse gap-2 justify-end items-start font-mono'>
                  <div className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min">React</div>
                  <div className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min">Tailwind</div>
                  <div className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min">HTMl</div>
                  <div className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min">CSS</div>
                  <div className="rounded-lg bg-slate-600 text-center px-2 py-1 h-min">JavaScript</div>

                </div>
              </div>
            </div>
    )
}