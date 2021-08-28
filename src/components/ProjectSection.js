import React,{useState,useEffect} from 'react'
import Project from './Project'
import axios from 'axios'
import Loading from './Loading'
const ProjectSection = (props) => {

    const [projectArray, setprojectArray] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const fetchProjectData= async ()=>{
            setloading(true)
            const {data}=await axios.get('https://portfolio-abhi-strike.herokuapp.com/projects?_sort=sort')
            const projects=data
            setprojectArray(projects)
            setloading(false)
        }        
        fetchProjectData()
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <section className={`project section active ${props.open}`} id="projects" onClick={props.closeOpen}>
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>My Projects</h2>
                        </div>
                    </div>
                    {
                        loading?<Loading></Loading>:!projectArray?<Loading></Loading>:
                        <div className="row">
                            {
                                projectArray.map(project=>
                                    {
                                        return <Project key={project._id} project={project}></Project>
                                    }
                                )
                            }        
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default ProjectSection
