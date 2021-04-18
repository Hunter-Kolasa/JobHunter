import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="/">Home</Link></li>
                    <li className="navbar-item"><Link to="/about">About</Link></li>
                    <li className="navbar-item"><Link to="/jobs">Jobs</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
