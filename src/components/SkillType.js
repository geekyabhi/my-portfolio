import React from 'react'
import Skill from './Skill'

const SkillType = ({skillType}) => {
    return (
        <div className="skills padd-15">
            <div className="row">
                <h1 className="padd-15">{skillType.name}</h1>
                <div className="skill-item languages padd-15">
                    {
                        skillType.skills&&skillType.skills.map(skill=>{
                            return <Skill key={skill._id} skill={skill}></Skill>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillType
