import React, { useState } from "react";
import { loginWithPhoneNumber } from "../../firebase/auth_phone_signin";

const SignWithPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await loginWithPhoneNumber(phoneNumber);
        console.log(res)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='tel'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
            />
            <button className='submit' type="submit">Sign in</button>
            <div id='recaptcha-container'></div>
        </form>
    );
};

export default SignWithPhone;
