import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar
