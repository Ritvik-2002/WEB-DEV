import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import FileBase64 from "react-file-base64";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [updated,setUpdated] = useState(false)
    const [output,setOutput] = useState("")
    const usenavigate = useNavigate();
    let username = sessionStorage.getItem('username');
    let name = sessionStorage.getItem('name');
    useEffect(() => {
        if (username === '' || username === null) {
            usenavigate('/login');
        }
        

    }, [usenavigate, username]);
    useEffect(()=>{
        fetch(`http://localhost:5000/${username}`).then(async response=>{
            await response.json().then(data=>{
                console.log(data);
                if(data.img) return setOutput(data.img)
                else return setOutput(null)
            })
        })
    },[updated,username])
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", username)
        formData.append("testImage", selectedFile);
        const response = await fetch("http://localhost:5000", {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        toast.success("uploaded successfully")
        setOutput(data.img)
        setUpdated(!updated)
    }

    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Welcome to Master DSA</h1>
            <div>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit} >
                        <div className="card">
                            <div className="card-header">
                                <h3>Update Details</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>User Name <span className="errmsg"></span></label>
                                            <input value={`${username}`} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Name <span className="errmsg"></span></label>
                                            <input value={`${name}`} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="fileInput"></label>
                                            <input type="file" id="fileInput" onChange={handleFileChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                        <img src={output} alt="" width={300}/>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Profile;