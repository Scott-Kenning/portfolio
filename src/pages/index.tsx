import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Box } from '../components/Box'
import Contact from '../components/Contact'
import { Work } from '../components/Work';
import About from '../components/About';

export default function Home() {
  const [selectedBox, setSelectedBox] = useState(null)

  return (
    <div className="text-neutral-200 max-h-screen h-screen flex flex-col bg-gray-800 overflow-hidden ">
      <header className="p-4">
        <div className="font-semibold text-center text-2xl">Scott Kenning</div>
      </header>
      <main className={`flex-grow flex flex-col md:flex-row ${!selectedBox && "divide-x divide-slate-500"} overflow-hidden`}>
      <Box title='About Me' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'About Me' ? null : 'About Me')}>
          <About />
      </Box>
      <Box title='Work' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'Work' ? null : 'Work')}>
          <Work />
      </Box>
      <Box title='Contact' selected={selectedBox} onClick={() => setSelectedBox(selectedBox === 'Contact' ? null : 'Contact')}>
          <Contact />
      </Box>

      </main>
      <footer className="p-4 flex justify-center items-center text-2xl">
        <a href="mailto:skenning128@gmail.com" className="mx-2" target="_blank"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/scott-kenning-99ba2521b" className="mx-2" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Scott-Kenning" className="mx-2" target="_blank"><FaGithub /></a>
      </footer>
    </div>
  )
}
