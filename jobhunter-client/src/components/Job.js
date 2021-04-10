import React, { Component } from 'react'

class Job extends Component {
    render() {
        const { title, company, type, location, description, url } = this.props;
        return (
            <div>
                <h1>{type}: {title}</h1>
                <h2>{location}</h2>
                <h3>{company}</h3>
                <p>{description}</p>
                <p>{url}</p>
            </div>
        )
    }
}

export default Job
