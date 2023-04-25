import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta'


import './sign.css'
const Signin = () => {
  return (
    <>
       <Meta title={"Sign Up"} />
      <Breadcrumb title=" Sign Up" />
      <div className="sign  ">
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="sign-card ">
                    <h3 className='text-center fw-bold '>Creat Account</h3>
                    <form action="" className='d-flex flex-column gap-4 '>
                    <div className='mt-1'>
                        <input type="text" name='fname' placeholder='First Name' className="form-control" />
                            
                        </div>
                        <div className='mt-1'>
                        <input type="email" name='email' placeholder='Last Name' className="form-control" />
                            
                        </div>
                        <div className='mt-1'>
                        <input type="email" name='email' placeholder=' Your Email' className="form-control" />
                            
                        </div>
                        <div className='mt-1'>
                        <input type="password" name='password' placeholder='Password' className="form-control" />   
                        </div>

                        <div className=" m-2 align-items-center d-flex justify-content-center ">
                            <button className='btn btn-primary' type='submit'>Create</button>
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

export default Signin
