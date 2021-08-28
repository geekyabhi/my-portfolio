import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const Aside = (props) => {
    return (
        <div className={`aside ${props.open}`}>
            <div className={`nav-toggler ${props.open}`} onClick={props.toggleOpen}>
                <span></span>
            </div>
            <div className="aside-inner">
                <div className="logo">
                    <Link to='/'>Abhinav</Link>
                </div>
                <Navbar closeOpen={props.closeOpen}></Navbar>
                <div className="copyright-text">
                    &copy; 2021 Abhinav Thakur
                </div>
            </div>
        </div>
    )
}

export default Aside
