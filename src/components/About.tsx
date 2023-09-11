import heroImage from "public/undraw_drink_coffee_jdqb.svg"
import Image from "next/image";
import { Pill } from '../components/Pill'; // Adjust the path accordingly

export default function About() {
    return (
        <div className="absolute w-screen flex flex-col items-center justify-center text-sm text-left p-4 top-4 md:top-0 max-w-2xl mx-auto">
            <Image src={heroImage} alt="Hero Image" width={150} height={150} className=" mb-4 rounded-full shadow shadow-white"/>
            {/* <h2 className="text-4xl font-semibold mx-auto">Hello 👋</h2> */}
            <p className="">
            Hello! I&apos;m Scott Kening, a full-stack developer and software engineering student at the University of Victoria. I specialize in Javascript and Typescript, but I enjoy writing code and solving problems in language. Beyond the usual coursework, I&apos;m leading a student project called StudySpaceFinder, a website that helps find empty classrooms on campus. When I&apos;m not staring at a screen, I enjoy going for runs and the occasional game of golf.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="flex flex-col gap-2">
                <p className="text-lg font-mono border-b border-gray-400">Languages</p>
                    <div className="flex flex-wrap w-full gap-2 text-sm">
                        <Pill>Typescript</Pill>
                        <Pill>Javascript</Pill>
                        <Pill>Python</Pill>
                        <Pill>Ruby</Pill>
                        <Pill>C</Pill>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-lg font-mono border-b border-gray-400">Technologies</p>
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
