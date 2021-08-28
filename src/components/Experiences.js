import Experience from './Experience'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'

export const Experiences = () => {

    const [experiences, setexperiences] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        async function getexperiences(){
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/experiences?_sort=sort')
            setexperiences(data)
            setloading(false)
        }
        getexperiences()
    }, [])

    return (
        <>
        {
            loading?<Loading></Loading>:!experiences?<Loading></Loading>:
            <div className="education padd-15">
            <h3 className="title">Experience</h3>
                <div className="timeline-box padd-15">
                    <div className="row">
                        <div className="timeline shadow-dark">
                            {
                                experiences.map(experience=>{
                                    return <Experience key={experience._id} experience={experience}></Experience>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
)
}
export default Experiences