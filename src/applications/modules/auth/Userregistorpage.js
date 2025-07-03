import React from 'react'
import { Link } from 'react-router-dom';

function Userregistorpage() {
  return (
    <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow p-5'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <p className='h3 mb-3'>Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">DOB</label>
                                    <input type="date" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Phone No</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="mb-3">
                                    <label class="form-label">Gender</label>
                                    <select className='form-select'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div class="mb-3">
                                    
                                    <input type="button" class="btn btn-success" value="submit"/>
                                    <input type="reset" class="btn btn-danger ms-3" value="cancel"/>
                                    <Link to="/userportal" className='ms-5'>Login</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Userregistorpage