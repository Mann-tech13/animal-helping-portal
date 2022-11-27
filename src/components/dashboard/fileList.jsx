import React from 'react'
import FileItem from './fileItem';
import axios from "axios"

function FileList({ files, removeFile }) {

    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8000/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <div>
            <ul className="file-list">
                {
                    files &&
                    files.map(f => (<FileItem
                        key={f.name}
                        file={f}
                        deleteFile={deleteFileHandler} />))
                }
            </ul>
            {/* {console.log(files.key)} */}
        </div>
    )
}

export default FileList