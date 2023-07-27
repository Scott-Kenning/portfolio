import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";
import { Box } from '../components/Box'
import { Projects } from '../components/Projects'
import { Work } from '../components/Work';
import About from '../components/About';

export default function Home() {
  const [selectedBox, setSelectedBox] = useState<'Work' | 'About Me' | 'Projects' | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const socialLinks = [
    { href: "mailto:skenning128@gmail.com", icon: <FaEnvelope />, name:"Email" },
    { href: "https://www.linkedin.com/in/scott-kenning", icon: <FaLinkedin />, name:"LinkedIn" },
    { href: "https://github.com/Scott-Kenning", icon: <FaGithub />, name:"Github" },
  ];

  return (
    <div className="text-neutral-100 h-screen flex flex-col bg-slate-700 overflow-auto md:overflow-hidden">
      <header className="p-4 flex justify-between md:justify-center items-center bg-gray-800 text-2xl">
        <div className="font-bold text-center ">Scott Kenning</div>
        <div className="md:hidden relative">
          <FaBars onClick={() => setMenuOpen(!isMenuOpen)} />
          {/* {isMenuOpen &&  */}
            <div className={`z-10 absolute flex flex-col items-start -right-4 mt-5 bg-gray-800 shadow-lg divide-y divide-gray-600 border-t border-gray-600 transition-all duration-100 ease-in-out opacity-0 ${isMenuOpen && "opacity-100"}`}>
              {socialLinks.map(({ href, icon, name }, index) => (
                <a key={index} href={href} className="block py-2 px-6 pl-4  text-base flex items-center gap-2 w-full" target="_blank" rel="noreferrer">
                  {icon} {name}
                </a>
              ))}
            </div>
          {/* } */}
        </div>
      </header>
      <main className={`flex-grow flex flex-col md:flex-row ${!selectedBox && "md:divide-x divide-y md:divide-y-0 divide-slate-500"} overflow-auto md:overflow-hidden`}>
        <Box title='Work' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'Work' ? null : 'Work')}>
            <Work />
        </Box>
        <Box title='About Me' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'About Me' ? null : 'About Me')}>
            <About />
        </Box>
        <Box title='Projects' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'Projects' ? null : 'Projects')}>
            <Projects selected={selectedBox === 'Projects'}/>
        </Box>
      </main>
      <footer className="p-4 flex justify-center items-center text-2xl md:flex hidden bg-gray-800">
        {socialLinks.map(({ href, icon }, index) => (
          <a key={index} href={href} className="mx-2" target="_blank" rel="noreferrer">
            {icon}
          </a>
        ))}
      </footer>
    </div>
  )
}
