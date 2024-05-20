import React, { useState } from "react";
import { signin } from "../../firebase/auth_signup_password";

const SignInMethod = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event) => {
        setPass(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            signin(email, pass);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
            />
            <input
                type='password'
                value={pass}
                onChange={handlePassChange}
                placeholder="Password"
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button className='submit' type="submit">Sign in</button>
        </form>
    );
};

export default SignInMethod;
