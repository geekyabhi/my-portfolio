import React from 'react'

const Skill = ({skill}) => {
    let styles={
        width:`${skill.rating}%`
    }
    return (
    <>
        <div className="skill-name-image">
            <div className="skill-img">
                {skill.image?<img src={skill.image.url} alt={skill.name}></img>:null}
            </div>
            <div className="skill-name">
                <h4>{skill.name}</h4>
            </div>
        </div>
        <div className="progress">
            <div className="progress-in" style={styles}></div>
                <div className="skill-percent">
                100%
            </div>
        </div>
    </>
    )
}

export default Skill
