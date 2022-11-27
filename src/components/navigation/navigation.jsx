import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./navigation.css"

function Navigation() {
    let navigate = useNavigate()
    return (
        <div>
            <div className="sidebar">
                <ul className='navpurpose'>
                    <li>Send Request</li>
                </ul>
                <ul className='navlist'>
                    <li onClick={() => navigate("/aboutUs")}>About Us</li>
                    <li onClick={() => navigate("/NGOs")}>NGOs</li>
                    <li onClick={() => navigate("/Donation")}>Donation</li>
                    <li onClick={() => navigate("/Blogs")}>Blogs</li>
                    <li onClick={() => navigate("/Profile")}>Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation