import React, { Component } from 'react';
import { connect } from 'react-redux';
import Job from './Job';

class SavedList extends Component {
    
    render() {
        let savedJobs;
        if (this.props.savedJobs) {
        if (this.props.savedJobs.length > 0) {
            savedJobs = this.props.savedJobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } type={ job.type } description={ job.description } url={ job.url }/>)
        } else {
            savedJobs = "You don't have any saved jobs!"
        }}
        return (
            <div className="left-sidebar-list">
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

