import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar
