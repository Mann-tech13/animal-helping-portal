import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import "./fileUpload.css"

// const API_endpoint = "https://api.openweathermap.org/data/3.0/onecall?"
// const API_key = "8c6bee0fe76183a69c8ea7ba94314f20"

function FileUpload({ files, setFiles, removeFile }) {
    
    const [ngoEmails, setNgoEmails] = useState(["mannshah.ict19@gmail.com"])
    const [emailData, setEmailData] = useState({
        name: "",
        email: "",
        phone: "",
        animal: "",
        // address: "",
        // landmark: "",
        // area: "",
        // pincode: "",
        // imgs: "",
    })

    // const [location, setLocation] = useState([])

    // const [email, setEmail] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        // if(name == "email"){
        //     setEmail(value)     
        // }
        setEmailData({
            ...emailData,
            [name]: value
        })
    }

    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            // file,
            file.name
        )
        axios.post('http://localhost:8000/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    const handleSumbit = async(e) => {
        // console.log(files.name)
        // navigator. geolocation. getCurrentPosition((position) => {
        //     let current_location = []
        //     current_location[0] = position.coords.latitude
        //     current_location[1] = position.coords.longitude
        //     // console.log(position)
        //     setLocation(current_location)
        // })
        // console.log(emailData)
        e.preventDefault()
        const response  = await fetch("http://localhost:8000/sendemail",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                emailData,
                // location,
                ngoEmails,
                // files
            })
        })
        console.log(response);
    }
    return (
        <div>
            {console.log(files)}
            <div className="main-content">
                <h1>Send your request from here</h1>
                <div className='input_div'><input type="text" name="name" value={emailData.name} className="form_field_name" onChange={handleChange} placeholder='Enter your name' /></div>
                <div className='input_div'><input type="text" name="email" value={emailData.email} className="form_field_email" onChange={handleChange  } placeholder='Enter your email' /></div>
                <div className='input_div'><input type="text" name="phone" value={emailData.phone} className="form_field_phone" onChange={handleChange} placeholder='Enter your phone number' /></div>
                <div className='input_div'><input type="text" name="animal" value={emailData.animal} className="form_field_animal" onChange={handleChange} placeholder='Animal ( Eg: Dog, Cat, ..)' /></div>
                {/* <div className='input_div'><input type="text" name="address" value={emailData.address} className="form_field_address" onChange={handleChange} placeholder='Address' /></div>
                <div className='input_div'><input type="text" name="landmark" value={emailData.landmark} className="form_field_landmark" onChange={handleChange} placeholder='Landmark' /></div>
                <div className='input_div'><input type="text" name="area" value={emailData.area} className="form_field_area" onChange={handleChange} placeholder='Area ( Eg: Vasna, Paldi, .. )' /></div>
                <div className='input_div'><input type="text" name="pincode" value={emailData.pincode} className="form_field_pincode" onChange={handleChange} placeholder='Pincode' /></div> */}
                <div className="file-card">

                    <div className="file-inputs">
                        {/* name="imgs" value={emailData.imgs} onChange={uploadHandler} */}
                        <input type="file" onChange={uploadHandler}/>
                        <button>
                            <i>
                                <FontAwesomeIcon icon={faPlus} />
                            </i>
                            Upload
                        </button>
                    </div>

                    <p className="main">Supported files</p>
                    <p className="info">PDF, JPG, PNG</p>

                </div>
            </div>
            <p>Note:    Please alloow the browser to acces your location for accurate approach.</p>
            <div className="submit_div"><input type="button" className='submit' value="Submit" onClick={handleSumbit} /></div>

        </div>
    )
}

export default FileUpload