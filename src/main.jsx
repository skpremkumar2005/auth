import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter,Route,Routes} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './component/Dashboard.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="749283445682-8ncgdlti0aeivkuplk6912alj8hkh3f3.apps.googleusercontent.com">
    
  <React.StrictMode>
    <BrowserRouter>
   <App/>
    </BrowserRouter>
     
  </React.StrictMode>
</GoogleOAuthProvider>,
)
