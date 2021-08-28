import Achievement from './Achievement'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'

export const Achievements = () => {

    const [achievements, setachievements] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        async function getAchievements(){
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/achievements?_sort=sort')
            setachievements(data)
            setloading(false)
        }
        getAchievements()
    }, [])

    return (
        <>
        {
            loading?<Loading></Loading>:!achievements?<Loading></Loading>:
            <div className="education padd-15">
            <h3 className="title">Achievements</h3>
                <div className="timeline-box padd-15">
                    <div className="row">
                        <div className="timeline shadow-dark">
                            {
                                achievements.map(achievement=>{
                                    return <Achievement key={achievement._id} achievement={achievement}></Achievement>
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
export default Achievements