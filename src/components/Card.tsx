import { AnimationOnScroll } from "react-animation-on-scroll"

export const Card = (props: {animate: boolean, hideWhenDark: boolean, styles?: string, children: any}) => {


    return (
        props.animate ? 
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <div className={`
                flex flex-col w-100 mb-8 p-4 rounded-xl shadow-lg bg-white transition ease-in-out hover:scale-[1.02] duration-1000 
                ${props.hideWhenDark && "dark:p-0 dark:bg-transparent dark:scale-100 dark:shadow-none"}
                ${props.styles}
                `}
            >
                {props.children}
            </div>
        </AnimationOnScroll>
        :
        <div className={`
            flex flex-col w-full mb-8 p-4 rounded-xl shadow-lg bg-white transition ease-in-out hover:scale-[1.02] duration-1000 
            ${props.hideWhenDark && "dark:p-0 dark:bg-transparent dark:scale-100 dark:shadow-none"}
            ${props.styles}
        `}
        >
            {props.children}
        </div>
    )
}