import Image from "next/image";
import { TimelineItem, Timeline} from "./TimeLine";

import WebDevImage from "public/undraw_web_developer_re_h7ie.svg";
import TestingImage from "public/undraw_split_testing_l1uw.svg";
import AIImage from "public/undraw_firmware_re_fgdy.svg";
import hiringImage from "public/undraw_job_hunt_re_q203.svg"

export const Work = () => {
  return (
    <Timeline>
        <TimelineItem 
            date="January - April 2022"
            title="Leanpub - Full Stack Developer"
            description="In my first co-op, I was a full stack developer working on the Leanpub website. I started out doing minor bug fixes, but by the end of the term I was solo developing large web features such as the 'Community Edition'."
            imageSrc={WebDevImage}
            // reverse
        />
        <TimelineItem 
            date="September - December 2022"
            title="PolicyMe - Software Testing Engineer"
            description="My second co-op was a testing position at PolicyMe. On top of the usual test creation and test suite maintenance, I also implemented several infrastructure upgrades such as test integration with Slack and Hubspot."
            imageSrc={TestingImage}
            // reverse
        />
        <TimelineItem 
            date="May - August 2023"
            title="Leanpub - Full Stack Developer"
            description="For my third co-op I returned to Leanpub as a Full Stack Developer, where my main focus was implementing EditAI, an OpenAI powered copy editor for ebooks. I also designed and developed large sections of the new storefront."
            imageSrc={AIImage}
            // reverse
        />
        {/* <TimelineItem 
            date="January - April 2024"
            title="[ Your Company Name ] - Future Job Title"
            description="I'm looking for a job! If you're hiring co-op student, please send me an email or connect with me on LinkedIn."
            imageSrc={hiringImage}
            // reverse
        /> */}
    </Timeline>


  );
};
