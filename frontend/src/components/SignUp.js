import React , {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            username_errors: [],
            password_errors: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignUP = () => {
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
        fetch("http://localhost:3000/user_signup",obj)
        .then(res => res.json())
        .then(data => data.errors ? this.setState({password_errors: data.errors.password, username_errors: data.errors.username}) : this.setState({password_errors: [], username_errors: []}))
    }

    // displayErrors = () => {
    //     if(this.state.password_errors.length > 0){
    //         return(
    //             <div>
    //                 <ul>
    //                     {this.state.password_errors.map(error => <li>{`Password ${error}`}</li>)}
    //                 </ul>
    //             </div>
    //         )
    //     }
    // }

    render(){
        return (
            <div>
                <ul>
                    {this.state.username_errors[0] ? this.state.username_errors.map(error => <li>{`Username ${error}`}</li>) : ""}
                    {this.state.password_errors[0] ? this.state.password_errors.map(error => <li>{`Password ${error}`}</li>) : ""}
                </ul>
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