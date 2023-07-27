import heroImage from "public/undraw_drink_coffee_jdqb.svg"
import Image from "next/image";

export default function About() {
    return (
        <div className="absolute w-screen flex flex-col items-center justify-center text-left p-10 mt-32 md:mt-0 max-w-3xl mx-auto">
            <Image src={heroImage} alt="Hero Image" width={200} height={200} className="mb-8 bg-blue-500 rounded-full shadow shadow-white"/>
            {/* <h2 className="text-4xl font-semibold mx-auto">Hello 👋</h2> */}
            <p className="text-lg">As a passionate developer with a flair for innovation, I thrive on crafting clean and efficient code to bring ideas to life. With a diverse skill set encompassing web and mobile technologies, I enjoy tackling complex challenges and delivering seamless user experiences. Constantly honing my skills and staying up-to-date with the latest trends, I am dedicated to creating cutting-edge solutions that make a positive impact. Let's code the future together!</p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col gap-2">
                <p className="text-2xl font-mono border-b border-gray-400">Languages</p>
                    <div className="flex flex-wrap w-full gap-2">
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Typescript</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Javascript</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Python</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Ruby</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-2xl font-mono border-b border-gray-400">Technologies</p>
                    <div className="flex flex-wrap w-full gap-2">
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">TailwindCSS</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">React.js</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Next.js</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Ruby on Rails</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Remix.run</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Flask</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">Firebase</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">GraphQL</p>
                        <p className="text-base bg-gray-600 rounded-lg p-3 py-1 font-mono">PostgreSQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
