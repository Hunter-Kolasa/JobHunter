import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-list">
                    <div className="navbar-complete">
                        <li name="/" className="navbar-item"><Link to="/"><img className="home-image" src={"/JobHunterLogoOnlyIcon.png"} alt="JobHunter Logo Only" /></Link></li>
                        <div className="text-nav-item">
                            <li name="/about" className="navbar-item"><Link to="/about">About</Link></li>
                            <li name="/jobs" className="navbar-item"><Link to="/jobs">Jobs</Link></li>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Nav
