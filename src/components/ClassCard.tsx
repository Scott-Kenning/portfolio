export const ClassCard = (props: {course: any}) => {
    const course = props.course
    return (
        <div key={course.code} className="font-Lato shadow-lg p-4 pt-2 rounded bg-white dark:bg-slate-700 flex flex-col justify-start w-full h-20 overflow-hidden
                        transition-height duration-500 ease-in-out h-16 hover:h-60">
            <h2 className="text-lg">{course.code}</h2>
            <p className="">{course.title}</p>
            <div className="w-100 h-1 bg-gray-600 rounded my-2 flex-shrink-0"></div>
            <p className="h-full">{course.description}</p>
            <a tabIndex={-1} href="https://google.ca" target="blank" className="text-right text-blue-400 dark:text-blue-200 hover:text-blue-300 hover:scale-102">UVic course outline</a>
        </div>
    )
}