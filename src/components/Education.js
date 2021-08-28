import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'
const Education = ({education}) => {
    return (
        <div className="timeline-item">
            <div className="circle-dot"></div>
            <h6 className="timeline-date">
                <FontAwesomeIcon icon={faCalendar} /> 
                <Moment format="YYYY">{education.startDate}</Moment>
                -
                {education.currently?'Present':
                    <Moment format="YYYY">{education.endDate}</Moment>
                }
            </h6>
            <h4 className="timeline-title">{education.heading}</h4>
            <p className="timeline-text">{education.description}</p>
        </div>
    )
}

export default Education
