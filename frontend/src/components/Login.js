import React , {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            status: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        let obj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }
        fetch("http://localhost:3000/user_login",obj)
        .then(res => res.json())
        .then(data => data.errors ? this.setState({status: data.errors}) : this.setState({status: "Login"}))
    }

    render() {
        return (
            <div>
                {this.state.status}
                <br/>
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