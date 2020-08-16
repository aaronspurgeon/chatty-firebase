import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default function Signup(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h1>
                    Sign Up to
          <Link to="/">Chatty</Link>
                </h1>
                <p>Fill in the form below to create an account.</p>
                <div>
                    <input placeholder="Email" name="email" type="email" onChange={props.handleChange} value={props.email}></input>
                </div>
                <div>
                    <input placeholder="Password" name="password" onChange={props.handleChange} value={props.password} type="password"></input>
                </div>
                <div>
                    {props.error ? <p>{props.error}</p> : null}
                    <button type="submit">Sign up</button>
                </div>
                <hr></hr>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}
