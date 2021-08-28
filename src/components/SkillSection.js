import axios from 'axios'
import Skills from './Skills'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'
const SkillSection = (props) => {

    const [about, setabout] = useState(null)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        async function getAbout(){
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/about')
            setabout(data)
            setloading(false)
        }
        getAbout()
    }, [])

    return (
        <>
            <section className={`about section active ${props.open}`} id="about" onClick={props.closeOpen}>
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    {
                        loading?<Loading></Loading>:!about?<Loading></Loading>:
                        <div className="row">
                            <div className="about-content padd-15">
                                <Skills></Skills>
                            </div>
                        </div>
                    }
                    </div>
            </section>
        </>
    )
}

export default SkillSection
