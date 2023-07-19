import heroImage from "public/undraw_drink_coffee_jdqb.svg"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center text-left space-y-6 p-10 text-white max-w-3xl mx-auto">
            <Image src={heroImage} alt="Hero Image" width={200} height={200} className="mb-8"/>
            <h2 className="text-4xl font-semibold mr-auto">Hello 👋</h2>
            <p className="text-lg">
                My Name's
            </p>
        </div>
    )
}
