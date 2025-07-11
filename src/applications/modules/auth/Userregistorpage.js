import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function Userregistorpage() {
    const { register, handleSubmit,formState: { errors }} = useForm();

const myform = (f)=>{
        console.log(f);
}


  return (
    <form onSubmit={handleSubmit(myform)}>
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h3 mb-3'>Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name='email' {...register("email",{required:true})}/>
                                    {errors.email && <p className='text-danger'>email is required</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" {...register("pass",{required:true,minLength:5,maxLength:12})}/>
                                    {/* {errors.pass && <p className='text-danger'>password is required</p>} */}
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>minimum length 5 charetue</p>}
                                    {errors.pass?.type==="maxLength" && <p className='text-danger'>Too much max langth 12 only</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control" {...register("dob")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="text" className="form-control" {...register("phone")}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <select className='form-select' {...register("gender")}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    
                                    <input type="submit" className="btn btn-success" value="submit"/>
                                    <input type="reset" className="btn btn-danger ms-3" value="cancel"/>
                                    <Link to="/userportal" className='ms-5'>Login</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
  )
}

export default Userregistorpage