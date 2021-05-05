import React, { Component } from 'react'
import { saveJob } from '../actions/saveJob'
import { connect } from 'react-redux'
import parse from 'html-react-parser'
import ShowMore from 'react-show-more-button/dist/module';

class Job extends Component {

    
    handleSave = () => {
        const job = this.props
        // console.log(job)
        this.props.saveJob(job)
    }
    render() {
        const { title, company, schedule, location, description, url } = this.props;

        return (
            <div className="center-job-tile">
                <h1>{schedule}: {title}</h1>
                <h2>{location}</h2>
                <h3>{company}</h3>
                <ShowMore maxHeight={150} backgroundColor="rgba(163, 163, 163, 0.192)">
                    {parse(`${description}`)}
                    <p><a href={url} target="_blank" rel="noreferrer">Link to Job</a> <button onClick={this.handleSave}>Save</button></p>
                </ShowMore>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       fetchAllJobs: () => dispatch(fetchAllJobs()),
//       fetchSavedJobs: () => dispatch(fetchSavedJobs())
//     }
//   }



export default connect(null, { saveJob })(Job)
