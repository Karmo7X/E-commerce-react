import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
    const {title}= props;
  return (
    <>
    <div className="breadcrumb py-4">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <p className='text-dark fw-bold text-center mb-0'>
                        <Link to="/" className='text-dark'>
                            Home
                        </Link>/{title}
                    </p>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Breadcrumb
