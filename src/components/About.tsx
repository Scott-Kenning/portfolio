import heroImage from "public/undraw_drink_coffee_jdqb.svg"
import Image from "next/image";
import { Pill } from '../components/Pill'; // Adjust the path accordingly

export default function About() {
    return (
        <div className="w-screen flex flex-col items-center justify-center text-base lg:text-sm 2xl:text-xl text-left p-8 max-w-2xl 2xl:max-w-4xl m-auto">
            <Image src={heroImage} alt="Hero Image" width={100} height={100} className="w-36 2xl:w-48 mb-4 rounded-full shadow shadow-white"/>
            <p>
            Hello! I&apos;m Scott Kening, a full-stack developer and software engineering student at the University of Victoria. I specialize in Typescript and Javascript, but I enjoy writing code and solving problems in any language. Beyond the usual coursework, I&apos;m leading a student project called StudySpaceFinder, a website that helps find empty classrooms on campus. When I&apos;m not staring at a screen, I enjoy going on runs and the occasional game of golf.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col gap-2">
                <p className="font-mono border-b border-gray-400">Languages</p>
                    <div className="flex flex-wrap w-full gap-2">
                        <Pill>Typescript</Pill>
                        <Pill>Javascript</Pill>
                        <Pill>Python</Pill>
                        <Pill>Ruby</Pill>
                        <Pill>C</Pill>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <p className="font-mono border-b border-gray-400">Technologies</p>
                    <div className="flex flex-wrap w-full gap-2">
                        <Pill>TailwindCSS</Pill>
                        <Pill>Remix.run</Pill>
                        <Pill>Next.js</Pill>
                        <Pill>React.js</Pill>
                        <Pill>Ruby on Rails</Pill>
                        <Pill>Node.js</Pill>
                        <Pill>Flask</Pill>
                        <Pill>GraphQL</Pill>
                        <Pill>PostgreSQL</Pill>
                    </div>
                </div>
            </div>
        </div>
    )
}
