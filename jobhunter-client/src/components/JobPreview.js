import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteJob } from '../actions/deleteJob';

export class JobPreview extends Component {
    handleDelete = () => {
        // console.log(this.props)
        this.props.deleteJob(this.props.id)
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

export default connect(null, { deleteJob })(JobPreview)
