import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';

const Singleblog = () => {
  return (
    <>
       <Meta title={" Dynamic Blog"}/>
      <Breadcrumb title=" Dynamic Blog"/>
      <div className="signlepage">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="single-blog mt-3 mb-5 ">
                        <Link to='/blog' className='d-flex align-items-center gap-4 fs-6'><AiOutlineArrowLeft/>Go Back Blog</Link>
                    <h3 className='fw-bold fs-2 '>A beautiful Sunday morning</h3>
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid' />
                    <p className='text-dark fs-6 '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sint ut, natus eligendi atque laboriosam itaque sapiente, debitis, deleniti consequatur non? Similique beatae voluptas optio laborum dolorum doloribus illo iure?
                    </p>
                    <Link to='/blog' className='d-flex align-items-center gap-4 mt-5 mb-5 fs-6'><AiOutlineArrowLeft/>Go Back Blog</Link>

                    </div>
            
                   
             

                    <div className="Contact mb-5">
                    <h3 className="fw-bold">Leave Your Comment</h3>
                  <form action="" className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        className="form-control "
                        placeholder=" Your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Your Comment"
                      ></textarea>
                    </div>

                    <div>
                      <button type="submit" className="btn btn-primary ">
                        Send
                      </button>
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

export default Singleblog
