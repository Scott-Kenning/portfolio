import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components"
import { Card } from "./Card"
import { Divider } from "./Divider"

export const Work = () => {
    return (
        <div className="flex flex-col w-full font-Lato ">
                <Card animate={true} hideWhenDark={true}>
                    <div className="flex justify-between py-2">
                        <h3 className="text-lg">PolicyMe - Software Intern in Test</h3>
                        <h3 className="text-lg">September - December 2022</h3>
                    </div>
                    <Divider/>
                    <div className="flex justify-between my-4">
                        <div className="flex max-w-xl">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex flex-col justify-right w-min pr-16">
                            <h3 className="text-lg">Skills:</h3>
                            <ul className="list-disc ml-12">
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </Card>
                <Card animate={true} hideWhenDark={true}>
                    <div className="flex justify-between py-2">
                        <h3 className="text-lg">Leanpub - Full Stack Developer Co-op</h3>
                        <h3 className="text-lg">January - April 2022</h3>
                    </div>
                    <Divider/>
                    <div className="flex justify-between my-4">
                        <div className="flex max-w-xl">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="flex flex-col justify-right w-min pr-16">
                            <h3 className="text-lg">Skills:</h3>
                            <ul className="list-disc ml-12">
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </Card>
        </div>
    )
}