import React, { Component } from 'react'

export class JobPreview extends Component {
    handleDelete = () => {
        console.log(this.props)
    }
    render() {
        const { title, location, schedule, url } = this.props;
        return (
            <div className="small-tile">
                <h3>{ schedule }: { title }</h3>
                <p>{ location } </p>
                <p><a href={url}>Link to Job</a> <button onClick={this.handleDelete}>Delete</button></p>
            </div>
        )
    }
}

export default JobPreview
