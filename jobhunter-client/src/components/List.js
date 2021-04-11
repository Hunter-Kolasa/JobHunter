import React, { Component } from 'react';
import { connect } from 'react-redux';

import Job from './Job';

class List extends Component {
    
    render() {
        let jobs;
        if (this.props.jobs) {
            jobs = this.props.jobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } type={ job.type } description={ job.description } url={ job.url }/>)
            }
            return (
            <div className="main-content-center">
                { jobs }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs
    }
}


export default connect(mapStateToProps)(List)
