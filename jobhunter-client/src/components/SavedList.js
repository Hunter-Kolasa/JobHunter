import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobPreview from './JobPreview'

class SavedList extends Component {
    
    render() {
        let savedJobs;
        if (this.props.savedJobs) {
        if (this.props.savedJobs.length > 0) {
            savedJobs = this.props.savedJobs.map( (job, index) => <JobPreview key={index} title={job.title} location={ job.location } schedule={ job.type } url={job.url}/>)
        } else {
            savedJobs = "You don't have any saved jobs!"
        }}
        return (
            <div className="left-sidebar-list">
                <h3 className="sidebar-title">Saved Jobs</h3>
                { savedJobs || "Loading" }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savedJobs: state.savedJobs
    }
}

export default connect(mapStateToProps)(SavedList)

