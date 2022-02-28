import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const {signInWithGoogle} = useAuth()

    return (
        <div>
            <h2>Log in here</h2>
            <button className='btn btn-warning' onClick={signInWithGoogle}>Google sign in</button>
        </div>
    );
};

export default Login;