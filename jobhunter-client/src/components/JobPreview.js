import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteJob } from '../actions/deleteJob';
import { CgClose } from 'react-icons/cg'

export class JobPreview extends Component {
    handleDelete = () => {
        // console.log(this.props)
        this.props.deleteJob(this.props.id)
    }
    render() {
        const { title, location, schedule, url } = this.props;
        return (
            <div className="small-tile">
                <div className="job-info">
                    <h3>{ schedule }: { title }</h3>
                    <p>{ location } </p>
                    <p><a href={url} target="_blank" rel="noreferrer">Link to Job</a></p> 
                </div>
                <CgClose className="delete-button" onClick={this.handleDelete}></CgClose>
                {/* <button onClick={this.handleDelete}>Delete</button> */}
            </div>
        )
    }
}

export default connect(null, { deleteJob })(JobPreview)
