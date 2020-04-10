import React , {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class SignUp extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUP = () => {
        
    }
    render(){
        return (
            <div>
                <label>User Name</label><br/>
                <input type="text" name="username" onChange={(e) => this.handleChange(e)}/>
                <br/>
                <label>Password</label><br/>
                <input type="text" name="password" onChange={(e) => this.handleChange(e)}/>
                <br/>
                <button onClick={() => this.handleSignUP()}>Sign Up</button>
                <br/>
                <button>
                    <NavLink to ='/login'>Login</NavLink>
                </button>
            </div>
        )
    }
}