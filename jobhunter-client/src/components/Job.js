import React, { Component } from 'react'
import { saveJob } from '../actions/saveJob'
import { connect } from 'react-redux'

class Job extends Component {
    render() {
        const { title, company, type, location, description, url } = this.props;
        
        return (
            <div>
                <h1>{type}: {title}</h1>
                <h2>{location}</h2>
                <h3>{company}</h3>
                <p>{description}</p>
                <p><a href={url}>Link to Job</a> <button onClick={(job) => console.log(job)}>Save</button></p>
            </div>
        )
    }
}



export default connect(null, { saveJob })(Job)
