import React, { useState } from "react";
import { signup } from "../../firebase/auth_signup_password";

const SignUpMethod = () => {
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
            await signup(email, pass);
            // Redirection ou autre action après une inscription réussie
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
            <button className='submit' type="submit">Sign up</button>
        </form>
    );
};

export default SignUpMethod;
