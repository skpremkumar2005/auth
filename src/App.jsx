import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Signup from './component/Signup';

function App() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    navigate("/dashboard");
                })
                .catch((err) => console.log(err));
        }
    }, [user, navigate]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        navigate("/");
    };

    return (
        
            <Routes>
                <Route path="/" element={<Signup login={login} />} />
                <Route path='/dashboard' element={<Dashboard logOut={logOut} profile={profile} />} />
            </Routes>
       
    );
}

export default App;
