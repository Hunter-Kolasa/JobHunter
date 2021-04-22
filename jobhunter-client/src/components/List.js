import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from "../actions/fetchAllJobs"
import Job from './Job';


class List extends Component {
    
    state = {
        jobs: this.props.jobs,
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchAllJobs(this.state.text)
    }
    
    render() {
        
        let jobs;
        if (this.props.jobs) {
            jobs = this.props.jobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } schedule={ job.type } description={ job.description } url={ job.url }/>)
            }
            return (
            <div>
                <div className="searchbar">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="text" onChange={this.handleChange} value={this.state.text}></input>
                        <button type="submit">Search for Jobs!</button>
                    </form>
                </div>
                <div className="main-content-center">
                    { jobs }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs
    }
}



export default connect(mapStateToProps, { fetchAllJobs })(List)
