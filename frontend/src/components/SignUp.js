import React , {Component} from 'react'

import {NavLink} from 'react-router-dom'

export default class SignUp extends Component {

    constructor(){
        super()
        this.state = {
            username_errors: "",
            password_errors: "",
            password_confirmation_errors: "",
            username_has_errors: false,
            password_has_errors: false,
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
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            })
        }
        fetch("http://localhost:3000/user_signup",obj)
        .then(res => res.json())
        .then(data => {
            let username_errors = []
            let password_errors = []
            let password_confirmation_errors = []
            let username_has_errors = false
            let password_has_errors = false
            let errors = "false"
            if(data.errors){
                if(data.errors.username){
                    username_errors = data.errors.username
                    username_has_errors = true 
                }
                if(data.errors.password){
                    password_errors = data.errors.password
                    password_has_errors = true
                }
                if(data.errors.password_confirmation){
                    password_confirmation_errors = data.errors.password_confirmation
                    password_has_errors = true
                }
                errors = "true"
            }
            this.setState({username_errors,username_has_errors,password_errors,password_has_errors,errors,password_confirmation_errors})
        })
    }

    render(){
        return (
            <div className="login_container shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Sign Up</h1>
                {
                    this.state.errors === "true" ? 
                        <div className="alert alert-danger" role="alert">
                            {this.state.username_has_errors ? this.state.username_errors.map(error => <li>{`Username ${error}`}</li>) : ""}
                            {this.state.password_has_errors ? this.state.password_errors.map(error => <li>{`Password ${error}`}</li>) : ""}
                            {this.state.password_has_errors ? this.state.password_confirmation_errors.map(error => <li>{`Password ${error}`}</li>) : ""}
                        </div>
                    : this.state.errors === "false" ? 
                        <div className="alert alert-success" role="alert">
                            Sign up success
                        </div>
                    : ""
                }
                <div class="form-group login_content">
                    <h3 >Username</h3>
                    <input type="text" className={
                        this.state.username_has_errors ? "form-control is-invalid"
                        : Array.isArray(this.state.username_errors) ? "form-control is-valid"
                        : "form-control"} name="username" onChange = {(e) => this.handleChange(e)}/>
                </div>
                <br/>
                <div class="form-group login_content">
                    <h3 >Password</h3>
                    <input type="password" className={
                        this.state.password_has_errors ? "form-control is-invalid"
                        : Array.isArray(this.state.password_errors) ? "form-control is-valid"
                        : "form-control"} name="password" onChange = {(e) => this.handleChange(e)}/>
                </div>
                <br/>
                <div class="form-group login_content">
                    <h3 >Password Confirmation</h3>
                    <input type="password" className={
                        this.state.password_has_errors ? "form-control is-invalid"
                        : Array.isArray(this.state.password_confirmation_errors) ? "form-control is-valid"
                        : "form-control"} name="password_confirmation" onChange = {(e) => this.handleChange(e)}/>
                </div>
                <br/>
                <button className="btn btn-outline-success" onClick={() => this.handleSignUP()}>Sign Up</button>
                <br/>
                <button className="btn btn-outline-success">
                    <NavLink to ='/login'>Login</NavLink>
                </button>
            </div>
        )
    }
}