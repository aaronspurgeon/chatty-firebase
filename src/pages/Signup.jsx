import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';

export default function Signup(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        setEmail({
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError({ error: '' })
        try {
            await signup(email, password);
        } catch (error) {
            setError({ error: error.message })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>
                    Sign Up to
          <Link to="/">Chatty</Link>
                </h1>
                <p>Fill in the form below to create an account.</p>
                <div>
                    <input placeholder="Email" name="email" type="email" onChange={handleChange} value={email}></input>
                </div>
                <div>
                    <input placeholder="Password" name="password" onChange={handleChange} value={password} type="password"></input>
                </div>
                <div>
                    {error ? <p>{error}</p> : null}
                    <button type="submit">Sign up</button>
                </div>
                <hr></hr>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}
