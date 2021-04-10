import React, { Component } from 'react';
import { connect } from 'react-redux';
import Job from './Job';

class List extends Component {
    
    render() {
        const jobs = this.props.jobs.map( (job, index) => <Job key={index} title={job.title} company={ job.company } location={ job.location } type={ job.type } />)
        return (
            <div>
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
