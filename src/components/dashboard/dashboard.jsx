import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import FileList from './fileList'
import FileUpload from './fileUpload'
import Navigation from "../navigation/navigation"
import "./dashboard.css"


function Dashboard({ setLoginUser }) {
    
    const [files, setFiles] = useState([])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
    }
    return (
        <div className='wrapper'>
            <Navigation/>
            <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
            <FileList files={files} removeFile={removeFile}/>
        </div>
    )
}

export default Dashboard