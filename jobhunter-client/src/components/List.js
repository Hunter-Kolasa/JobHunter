import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllJobs } from '../actions/fetchAllJobs'
import Job from './Job';
import Loader from './Loader/Loader'
import Paginator from './Paginator'


class List extends Component {
    
    state = {
        jobs: this.props.jobs,
        search: "",
        location: "",
        fullTime: ""
    }

    handleChange = (event) => {
        this.setState({...this.state,
            [event.target.name]: event.target.value
        })
    }

    toggleCheckbox = (event) => {
        this.setState({...this.state,
            fullTime: !event.target.checked
        })
        console.log(this.state.fullTime)
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchAllJobs(this.state.search, this.state.location, this.state.fullTime)
    }
    
    render() {
        let jobNumber;
        let jobs;
        let loader;
        if (this.props.loading) {
            loader = <Loader />
        } else {
            loader = ""
        }
        if (this.props.jobs) {
            jobs = this.props.jobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } schedule={ job.type } description={ job.description } url={ job.url }/>)
            jobNumber = jobs.length
        } 
        return (
            <div>
                <div className="searchbar">
                    <form onSubmit={this.handleSubmit}>
                        <input className="search" placeholder="Search" type="text" name="search" onChange={this.handleChange} value={this.state.search}></input>
                        <input className="location" placeholder="Location" type="text" name="location" onChange={this.handleChange} value={this.state.location}></input>
                        <label htmlFor="fulltime">Full Time</label>
                        <input className="fulltime" id="fulltime" type="checkbox" name="fullTime" onChange={this.toggleCheckbox} value="true"></input>
                        <button type="submit">Search for Jobs!</button>
                    </form>
                </div>
                <div className="main-content-center">
                    <div className="paginator-container">
                        <Paginator search={this.props.search} location={this.props.location} fullTime={this.props.fullTime} jobsLength={jobNumber}/>
                    </div>
                    { loader }
                    { jobs }
                    <div className="paginator-container">
                        <Paginator search={this.props.search} location={this.props.location} fullTime={this.props.fullTime} jobsLength={jobNumber}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        loading: state.loading
    }
}



export default connect(mapStateToProps, { fetchAllJobs })(List)
