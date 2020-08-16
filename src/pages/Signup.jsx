import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

export default function Signup(props) {
    const [data, setData] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({ error: '' })
        signup(data.email, data.password);
        // } catch (error) {
        //     setError({ error: error.message })
        // }
    }

    async function googleSignIn() {
        try {
            await signInWithGoogle();
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
                    <input placeholder="Email" name="email" type="email" onChange={handleChange} value={data.email}></input>
                </div>
                <div>
                    <input placeholder="Password" name="password" onChange={handleChange} value={data.password} type="password"></input>
                </div>
                <div>
                    {error ? <p>{error}</p> : null}
                    <button type="submit">Sign up</button>
                </div>
                <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
                    Sign up with Google
          </button>
                <hr></hr>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}
