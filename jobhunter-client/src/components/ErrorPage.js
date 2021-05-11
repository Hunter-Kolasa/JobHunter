import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
    render() {
        return (
            <div className="main-content-center">
                <h3>Whoops! How'd you get here??</h3>
                <p><Link to="/jobs">Your Job Search Is Right Back Here</Link></p>
            </div>
        )
    }
}

export default ErrorPage
