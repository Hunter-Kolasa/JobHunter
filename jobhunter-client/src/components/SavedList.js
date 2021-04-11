import React, { Component } from 'react';
import { connect } from 'react-redux';
import Job from './Job';

class SavedList extends Component {
    
    render() {
        // const jobs = this.props.savedJobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } type={ job.type } description={ job.description } url={ job.url }/>)
        return (
            <div className="left-sidebar-list">
                
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

