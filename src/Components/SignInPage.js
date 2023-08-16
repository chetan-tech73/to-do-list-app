import React, { useState } from 'react';
import auth from '../firebaseConfig'; // Use default import

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setError (null);
            setSuccessMessage ('user signed in successfully');
        }catch (error) {
            setError('Invalid email or password');
            setSuccessMessage ('');
        }
    };

    return(
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                />
                <input
                type='password'
                placeholder='password'
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                />
                <button type='submit'>Sign In</button>
            {error && <p style={{ color: 'red'}}>{error}</p>}
                { successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
}

export default SignInPage;