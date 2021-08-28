import React from 'react'
const Achievement = ({achievement}) => {
    return (
        <div className="timeline-item">
            <div className="circle-dot"></div>
            {/* <h6 className="timeline-date">
                <i className="fa fa-calendar"></i>
                <Moment format="YYYY">{achievement.startDate}</Moment>
                -
                {achievement.currently?'Present':
                    <Moment format="YYYY">{achievement.endDate}</Moment>
                }
            </h6> */}
            <h4 className="timeline-title">{achievement.heading}</h4>
            <p className="timeline-text">{achievement.description}</p>
        </div>
    )
}

export default Achievement
