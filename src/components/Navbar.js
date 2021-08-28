import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
    return (
        <>
            <ul className="nav">
            <li><Link to={'/'} onClick={props.closeOpen}> Home </Link></li>
            <li><Link to={'/about'} onClick={props.closeOpen}> About Me</Link></li>
            <li><Link to={'/skills'} onClick={props.closeOpen}> Skills</Link></li>
            <li><Link to={'/projects'} onClick={props.closeOpen}> Projects </Link></li>
            <li><Link to={'/contact'} onClick={props.closeOpen}> Contact </Link></li>
            </ul>
        </>
    )
}

export default Navbar
