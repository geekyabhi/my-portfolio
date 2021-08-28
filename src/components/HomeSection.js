import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin ,faInstagram , faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons'
import Loading from './Loading'
const HomeSection = (props) => {

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
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <section className={`home section active ${props.open}`} id="home" onClick={props.closeOpen}>
            <div className="container">
                {
                    loading ?<Loading></Loading>:!about?<Loading></Loading>:
                    <div className="intro">
                    <img src={about.image.url} alt={about.firstName} className="shadow-dark"></img>
                    <h1>{about.firstName} {about.lastName}</h1>
                    <p>{about.shortDescription}</p>
                    <div className="social-link">
                        <a href={about.instagram} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href={about.linkedIn} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                        <a href={`mailto:${about.gmail}`} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGooglePlusSquare} /> </a>
                        <a href={about.github} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    </div>
                }
            </div>
            </section>
        </>
    )
}
export default HomeSection
