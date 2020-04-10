import React , {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class Login extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {

    }

    render() {
        return (
            <div>
                <label>Username</label><br/>
                <input type="text" name="username" onChange = {(e) => this.handleChange(e)}/>
                <br/>
                <label>Password</label><br/>
                <input type="text" name="password" onChange = {(e) => this.handleChange(e)}/>
                <br/>
                <button onClick={() => this.handleLogin()}>Login</button>
                <br/>
                <button>
                    <NavLink to = "/signup">Sign Up</NavLink>
                </button>
            </div>
        )
    }
}