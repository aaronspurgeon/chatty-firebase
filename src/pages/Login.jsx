import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default function Login(props) {
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
            await signin(email, password);
        } catch (error) {
            setError({ error: error.message })
        }
    }

    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <h1>
                    Login to
          <Link to="/">Chatty</Link>
                </h1>
                <p>Fill in the form below to login to your account.</p>
                <div>
                    <input placeholder="Email" name="email" type="email" onChange={handleChange} value={email}></input>
                </div>
                <div>
                    <input placeholder="Password" name="password" onChange={handleChange} value={password} type="password"></input>
                </div>
                <div>
                    {error ? <p>{error}</p> : null}
                    <button type="submit">Login</button>
                </div>
                <hr></hr>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    )
}
