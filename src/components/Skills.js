import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'
import SkillType from './SkillType'
const Skills = () => {

    // const [skills, setskills] = useState(null)
    const [skillTypes, setskillTypes] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        async function getSkills(){
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/skill-types?_sort=sort')
            setskillTypes(data)
            setloading(false)
        }
        getSkills()
    }, [])

    return (
        <>
            {
            loading?<Loading></Loading>:!skillTypes?<Loading></Loading>:
            <div className="row">
                {
                    skillTypes.map(skillType=>{
                        return <SkillType id={skillType._id} skillType={skillType}></SkillType>
                    })
                }
            </div>
            }
        </>
    )
}

export default Skills
