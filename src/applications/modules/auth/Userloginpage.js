import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Userloginpage() {
// const [myform,setmyform]=useState({
//     email:"admin@gmail.com ",
//     pass:"123"
// });

const mynav = useNavigate();

const [em,setem]= useState("admin@gmail.com");
const [ps,setps]=useState("123");


const updatemail = (el)=>{
    setem(el.target.value);
}

const updatepass = (pad)=>{
        setps(pad.target.value);
}

const validationlogin = ()=>{
        if(em==="" || ps==="")
        {
            toast.warning("your email and password is blank",{position:"top-left",theme: "dark",autoClose: 2000});
        }
        else
        {
             toast.success("successfully login ",{position:"top-left",theme: "dark",autoClose: 2000});
            setTimeout(()=>{
                mynav("/dashboard");
            },2000)
        }
}




  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <ToastContainer/>
                                <p className='h3 mb-3'>Logon page</p>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control"  value={em} onInput={updatemail}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" onInput={updatepass} value={ps}/>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-success" value="submit" onClick={validationlogin}/>
                                    <Link to="registor" className='ms-5'>Registor now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userloginpage