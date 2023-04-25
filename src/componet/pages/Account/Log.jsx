import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta'
import { Link } from 'react-router-dom';

import './login.css'
 
const Log = () => {
  return (
    <>
      <Meta title={"Login"} />
      <Breadcrumb title="Login" />
      <div className="login  ">
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="login-card ">
                    <h3 className='text-center fw-bold '>Login</h3>
                    <form action="" className='d-flex flex-column gap-4 '>
                        <div className='mt-1'>
                        <input type="email" name='email' placeholder=' Your Email' className="form-control" />
                            
                        </div>
                        <div className='mt-1'>
                        <input type="password" name='password' placeholder='Password' className="form-control" />   
                        </div>
                        <div>
                            <Link  to="/Forget-Password">Forget Password</Link>
                        </div>

                        <div className=" m-2 align-items-center d-flex justify-content-center gap-2">
                            <button className='btn btn-primary' type='submit'>Login</button>
                            <Link to="/Signin">
                            <button className='btn btn-outline-primary' >Sign Up</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Log
