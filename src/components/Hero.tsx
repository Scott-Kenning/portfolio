import { TypeAnimation } from "react-type-animation";
import heroImage from "public/undraw_developer_activity_re_39tg.svg"
import Image from "next/image";

export const Hero = () => {
  
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen justify-center">
            <div className="flex flex-col md:mr-8 justify-center text-center">
              <h1 className='text-4xl md:text-8xl'> Scott Kenning</h1>
              <TypeAnimation
                sequence={[
                  "Software Engineering Student",
                  1000,
                  "Full Stack Developer",
                  1000,
                  "Programming Enthusiast",
                  1000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                className="font-mono"
              />
            </div>
            <Image src={heroImage} alt="Hero Image" width={450} height={350} className="mb-8"/>
        </div>
    )
}