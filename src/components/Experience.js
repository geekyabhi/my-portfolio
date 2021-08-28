import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'
const Experience = ({experience}) => {
    return (
            <div className="timeline-item">
                <div className="circle-dot"></div>
                <h6 className="timeline-date">
                    <FontAwesomeIcon icon={faCalendar} /> 
                    <Moment format="MM-YYYY">{experience.startDate}</Moment>
                    -
                    {experience.currently?'Present':
                        <Moment format="MM-YYYY">{experience.endDate}</Moment>
                    }
                </h6>
                <h4 className="timeline-title">{experience.heading}</h4>
                <p className="timeline-text">{experience.description}</p>
            </div>
)
}

export default Experience
