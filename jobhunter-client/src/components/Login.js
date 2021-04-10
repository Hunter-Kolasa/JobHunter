import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    // handleSubmit = 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    <br/>
                    <label htmlFor="password">Password </label>
                    <input type="password" onChange={this.handleChange} value={this.state.password}/>
                    <p><button type="submit">Login</button></p>
                </form>
            </div>
        )
    }
}

export default Login
