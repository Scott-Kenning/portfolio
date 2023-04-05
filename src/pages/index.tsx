import Head from 'next/head'
import { Inter } from '@next/font/google'
import { ProjectCard } from '@/components/ProjectCard'
import { Hero } from '@/components/Hero'
import { SectionTitle } from '@/components/SectionTitle'
import { Work } from '@/components/Work'
import { Header } from '@/components/Header'
import { useState } from 'react'
import { PageLink } from '@/components/Link'
import { ClassesContainer } from '@/components/ClassesContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
      <Head>
        <title>Scott Kenning</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Coming+Soon&family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <main className={`flex flex-col items-center w-100 font-Lato ${darkMode ? "text-white dark darkBackground" : "lightBackground"}`}>
        <Header handleClick={() => setDarkMode(!darkMode)}/>
        <div className='flex flex-col items-center w-9/12'>
          <Hero/>
          <SectionTitle title="Featured Project"/>
          <div className="flex flex-col mb-32 items-center">
            <ProjectCard/>
            {/* <PageLink url="https://google.ca" text="View My Github"/> */}
          </div>
          <SectionTitle title="Relevant Classes"/>
          <ClassesContainer/>
          <div className='flex flex-col w-full px-4 text-black dark:text-gray-100 mt-16'>
            <SectionTitle title="Co-op Experience"/>
            <Work/>
          </div>
          <div className='w-full flex justify-center mt-32 mb-4'>
            <div className="h-8 w-8 rounded-full bg-white mx-2"></div>
            <div className="h-8 w-8 rounded-full bg-white mx-2"></div>
            <div className="h-8 w-8 rounded-full bg-white mx-2"></div>
          </div>
        </div>
      </main>
    </>
  )
}
