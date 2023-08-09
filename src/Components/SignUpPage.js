import React, { useState } from "react";
import { auth } from '../firebaseConfig';

function SignUpPage () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await auth.createUserWithEmailAndPassword( email, password);
            setError (null);
            setSuccessMessage('User Signed Up Successfully');
        } catch (error) {
            setError ('Failed to sign up');
            setSuccessMessage('');
        }
    };

    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                {error && <p style={{ color: 'red'}}>{error}</p>}
                {successMessage && <p style={{ color: 'green'}}>{successMessage}</p>}
            </form>
        </div>
    );
}

export default SignUpPage;