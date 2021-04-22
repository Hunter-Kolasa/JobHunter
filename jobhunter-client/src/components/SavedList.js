import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobPreview from './JobPreview';
import Loader from './Loader/Loader'


class SavedList extends Component {
    
    render() {
        let savedJobs;
        if (this.props.loadingSaved) {
            savedJobs = <Loader />
        }
        if (this.props.savedJobs) {
            if (this.props.savedJobs.length > 0) {
                savedJobs = this.props.savedJobs.map( (job, index) => <JobPreview key={ job.id } id={ job.id } title={job.title} location={ job.location } schedule={ job.schedule } url={job.url}/>)
            } else {
                savedJobs = "You haven't saved any jobs yet!"
            }
        }
        return (
            <div className="left-sidebar-list">
                <h3 className="sidebar-title">Saved Jobs</h3>
                <div className="list-centered">
                    { savedJobs }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savedJobs: state.savedJobs,
        loadingSaved: state.loadingSaved
    }
}

export default connect(mapStateToProps)(SavedList)

