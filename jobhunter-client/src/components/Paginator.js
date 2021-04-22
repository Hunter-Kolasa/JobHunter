import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllJobs } from '../actions/fetchAllJobs'

export class Paginator extends Component {

    handleClick = (e) => {
        let page = this.props.page;
        let search = this.props.search
        window.scrollTo(0, 0)
        if(e.target.name === "pageDown") {
            page = (page > 1 ? (page - 1) : 1)
            console.log(page)
            this.props.fetchAllJobs(search, page)
        } else if(e.target.name === "pageUp") {
            page = (this.props.jobsLength < 49 ? page : (page + 1))
            this.props.fetchAllJobs(search, page)
        }
    }

    render() {
        let btnDown = <button className="button-left" name="pageDown" onClick={this.handleClick}>Previous Page</button>;
        let btnUp = <button className="button-right" name="pageUp" onClick={this.handleClick}>Next Page</button>;
        if (this.props.page === 1) {
            btnDown = ""
        }
        if (this.props.jobsLength < 49) {
            btnUp = ""
        }
        return (
            <div>
               {btnDown}
               {btnUp}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        page: state.page,
        search: state.search
    }
}

export default connect(mapStateToProps, { fetchAllJobs })(Paginator)
