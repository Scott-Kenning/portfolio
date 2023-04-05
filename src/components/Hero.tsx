import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
    return (
        <div className="flex my-24 mb-48">
            <div className="flex flex-col mr-8 justify-center text-center">
              <h1 className='text-7xl'> Scott Kenning</h1>
              <TypeAnimation
                sequence={[
                  "UVic software engineering student",
                  1000,
                  "Programming Enthusiast",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                className="font-mono"
              />
            </div>
            <div className='bg-green-900 w-96 h-96 rounded-lg shadow-2xl'>
            </div>
        </div>
    )
}