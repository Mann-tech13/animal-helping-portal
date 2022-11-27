import React, { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/dashboard/dashboard"
import AccountLogin from './components/account/accountLogin'
import AccountRegister from './components/account/accountRegister'
import AboutUs from './components/aboutUs/aboutUs'
import NGOs from './components/NGOs/NGOs'
// import Donation from './components/Donation/donation'
// import Blogs from './components/Blogs/blogs'
// import Profile from './components/Profile/profile'
import './App.css';

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
              user && user._id ? <Dashboard setLoginUser={user}/> : <AccountLogin setLoginUser={setLoginUser}/>
            }/>
            
          <Route exact path="/login" element={<AccountLogin setLoginUser={setLoginUser}/>}/>
          <Route exact path="/register" element={<AccountRegister/>}/>
          <Route exact path="/aboutUs" element={<AboutUs/>}/>
          <Route exact path="/NGOs" element={<NGOs/>}/>
          {/* <Route exact path="/Donation" element={<AboutUs/>}/>
          <Route exact path="/Blogs" element={<AboutUs/>}/>
          <Route exact path="/Profile" element={<AboutUs/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
