import { AnimationOnScroll } from "react-animation-on-scroll"
import { ClassCard } from "./ClassCard"
import { classes } from "../data"

export const ClassesContainer = () => {
    

    return (
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className="flex justify-between h-96 items-start gap-2">
                <div className="w-full flex flex-wrap justify-between gap-y-2 w-full">
                    {classes.slice(0, classes.length/3).map((c) => {
                        return <ClassCard course={c}/>
                    })}
                </div>
                <div className="w-full flex flex-wrap justify-between gap-y-2 w-full">
                    {classes.slice(classes.length/3, 2*classes.length/3).map((c) => {
                        return <ClassCard course={c}/>
                    })}
                </div>
                <div className="w-full flex flex-wrap justify-between gap-y-2 w-full">
                    {classes.slice(2*classes.length/3, classes.length).map((c) => {
                        return <ClassCard course={c}/>
                    })}
                </div>
            </div>
        </AnimationOnScroll>
        )   
}