import React, { Component } from 'react'

class Job extends Component {
    render() {
        const { title, company, type, location } = this.props;
        return (
            <div>
                <h1>{title}, {location}</h1>
                <h2>{company}</h2>
                <p>{type}</p>
            </div>
        )
    }
}

export default Job
