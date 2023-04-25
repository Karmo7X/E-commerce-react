import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta'

import './Reset.css'

const Reset = () => {
  return (
    <>
       <Meta title={"Reset  Password"} />
      <Breadcrumb title="Reset Password" />
      <div className="reset  ">
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="reset-card ">
                    <h3 className='text-center fw-bold '>Creat Account</h3>
                    <form action="" className='d-flex flex-column gap-4 '>
                    
                        <div className='mt-1'>
                        <input type="password" name='password' placeholder='New Password' className="form-control" />
                            
                        </div>
                        <div className='mt-1'>
                        <input type="password" name='password' placeholder='Confirm Password' className="form-control" />   
                        </div>

                        <div className=" m-2 align-items-center d-flex justify-content-center ">
                            <button className='btn btn-primary' type='submit'>submit</button>
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

export default Reset
