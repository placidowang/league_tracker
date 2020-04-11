import React , {Component} from 'react'
// import { Segment , Button , Input} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            status: "",
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
        .then(data => {
            if(data.errors){
                this.setState({status: data.errors, errors: "true"})
            }else{
                this.props.history.push("/")
                this.props.displayMessage("Login Success")
                localStorage.token = data.token
            }
        })
    }

    render() {
        return (
            <div className="login_container shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Login</h1>
                {
                    this.state.errors === "true" ? 
                        <div className="alert alert-danger" role="alert">
                            {this.state.status}
                        </div>
                    : ""
                }
                <div class="form-group login_content">
                    <h3 >Username</h3>
                    <input type="text" className={
                        this.state.status === "Invalid Username or Password" ? "form-control is-invalid"
                        : this.state.status === "Login Success" ? "form-control is-valid"
                        : "form-control"} name="username" onChange = {(e) => this.handleChange(e)}/>
                </div>
                <br/>
                <div class="form-group login_content">
                    <h3 >Password</h3>
                    <input type="password" className={
                        this.state.status === "Invalid Username or Password" ? "form-control is-invalid"
                        : this.state.status === "Login Success" ? "form-control is-valid"
                        : "form-control"} name="password" onChange = {(e) => this.handleChange(e)}/>
                </div>
                <br/>
                <button className="btn btn-outline-success" onClick={() => this.handleLogin()}>Login</button>
                <br/>
                <button className="btn btn-outline-success">
                    <NavLink to = "/signup">Sign Up</NavLink>
                </button>
            </div>
        )
    }
}