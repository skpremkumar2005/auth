import React from 'react';

const Signup = ({ login }) => {
    return (
        <div>
            <button onClick={login}>Sign in with Google</button>
        </div>
    );
}

export default Signup;
