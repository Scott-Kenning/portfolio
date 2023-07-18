import heroImage from "public/undraw_developer_activity_re_39tg.svg"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-start justify-center space-y-6 p-10 text-white max-w-screen-lg mx-auto">
            <Image src={heroImage} alt="Hero Image" width={450} height={350} className="mb-8"/>
            <h2 className="text-4xl font-semibold">Scott Kenning</h2>
            <p className="text-xl">
                A dedicated and passionate 20-year-old Software Engineering student from the University of Victoria. I have a passion for coding, creating innovative solutions and learning new technologies. My journey in software development is always evolving and I am constantly seeking new challenges and experiences.
            </p>
        </div>
    )
}
