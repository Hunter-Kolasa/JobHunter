import React, { Component } from 'react'

export class Form extends Component {
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

export default Form
