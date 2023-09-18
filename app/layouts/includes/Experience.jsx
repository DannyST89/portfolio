import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
const Experience = () => {
    return (
        <VerticalTimeline>
            <h2 className="flex justify-center content-center text-[30px]">
                My Expirience
            </h2>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(75, 85, 99)', color: '#fff' }}
                icon={<FaUserGraduate />}
            >
                <h3 className="vertical-timeline-element-title">
                    Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(75, 85, 99)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(75, 85, 99)', color: '#fff' }}
                icon={<BsCodeSlash />}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default Experience;
