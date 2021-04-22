import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { fetchAllJobs } from '../actions/fetchAllJobs'
// import { ReactComponent as Logo } from 'react'


class Home extends Component {
    render() {
        return (
            
            <div className="main-content-center">
                <div className="home">
                    <img src={"/JH2.png"} alt="JobHunter Logo" /><br/>
                    <Link className="link" to="/jobs">Begin Your Hunt!</Link>
                </div>
            </div>
        )
    }
}

export default Home
