import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("india");
    const [address, addresschange] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, password, email, phone, country, address };
            if (IsValidate()) {
            //console.log(regobj);
            axios.post("http://localhost:5000/register",regobj).then((res) => {
                // console.log(res);
                const enteredOTP = prompt("Enter otp sent to mail")
                const verification = {
                    email:email,
                    otp: enteredOTP
                }
                toast.success('Registered successfully.')
                navigate('/login');
                // axios.post("http://localhost:5000/verifyotp",verification).then(response => {
                //     console.log(response);
                //     if(response.status === 200){
                //     } else{
                //         toast.error('Invalid OTP')
                //     }
                // })
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    // const handlesubmit =  async (e) => {
    //     // e.preventDeafult();
    //     let result = {id, name, password, email, phone, country, address};
    //     if(IsValidate()){
    //       try {
    //          await axios.post('http://localhost:8000/user', result);
    //         // console.log(response.data);
            
    //         toast.success('Registerd Sucessfully !'+ name)
        
    //         // updatename('')
    //         // updateemail('')
    //         // updatepassword('')
    //         navigate('/login');
            
    //       } catch (error) {
    //         toast.error('Failed :' + error.message);
    //         // console.error(error);  
    //       }
    //     //   fetch("http://localhost:4000/users", {
    //     //     method: "POST",
    //     //     headers: { 'content-type': 'application/json' },
    //     //     body: JSON.stringify(result)
    //     // }).then((res) => {
    //     //     toast.success('Registered successfully');
    //     //     navigate('/Login');
    //     // }).catch((err) => {
    //     //     toast.error('Failed :' + err.message);
    //     // });
    //     }
    
    //   };
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="singapore">Singapore</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            <Link to={'/login'} className="btn btn-danger">Close</Link>
                        </div>
                    </div>
                </form>
                <ToastContainer/>
            </div>


        </div>
    );
}

export default Register;