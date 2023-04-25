import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta'


import './forget.css'

const Forget = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <Breadcrumb title=" Forget Password" />
      <div className="forget  ">
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="forget-card ">
                    <h3 className='text-center fw-bold '>Reset Password</h3>
                    <p className='text-center text-dark mb-2 mt-2 '>we will send you an email to reset your password</p>
                    <form action="" className='d-flex flex-column gap-4 '>
                        <div className='mt-1'>
                        <input type="email" name='email' placeholder=' Your Email' className="form-control" />
                            
                        </div>
                

                        <div className=" m-2 align-items-center d-flex justify-content-center flex-column gap-2">
                            <button className='btn btn-primary'>submit</button>
                            <Link className='btn ' to="/login">Cancel</Link>
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

export default Forget
