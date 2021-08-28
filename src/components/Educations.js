import Education from './Education'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loading from './Loading'
const Educations = () => {

    const [educations, seteducations] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        async function getEducations(){
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/educations?_sort=sort')
            seteducations(data)
            setloading(false)
        }
        getEducations()
    }, [])


    return (
        <>
            {
            loading?<Loading></Loading>:!educations?<Loading></Loading>:
            <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="timeline-box padd-15">
                    <div className="row">
                        <div className="timeline shadow-dark">
                            {
                                educations.map(education=>{
                                    return <Education key={education._id} education={education}></Education>
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

export default Educations
