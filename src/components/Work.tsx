import Image from "next/image";
import { TimelineItem, Timeline} from "./TimeLine";

import image from "public/undraw_web_developer_re_h7ie.svg";
import testingImage from "public/undraw_split_testing_l1uw.svg";
import AIImage from "public/undraw_firmware_re_fgdy.svg";

export const Work = () => {
  return (
    <Timeline>
        <TimelineItem 
            date="January - April 2022"
            title="Leanpub - Front End Developer"
            description="In my first co-op, I was a developer for the website Leanpub. Throughout the co-op I helped design..."
            imageSrc={image}
            // reverse
        />
        <TimelineItem 
            date="September - December 2022"
            title="Leanpub - Front End Developer"
            description="In my first co-op, I was a developer for the website Leanpub. In my first co-op, I was a developer for the website Leanpub. In my first co-op, I was a developer for the website Leanpub."
            imageSrc={testingImage}
            // reverse
        />
        <TimelineItem 
            date="May - August 2023"
            title="Leanpub - Full Stack Developer"
            description="In my third co-op, I returned to Leanpub as a Full Stack Developer..."
            imageSrc={AIImage}
            // reverse
        />
        <TimelineItem 
            date="January - April 2024"
            title="Your Company Name Here"
            description="I'm looking for a job! If you're hiring co-op students and like what you see, send me an email with the link below"
            imageSrc={image}
            // reverse
        />
    </Timeline>


  );
};
