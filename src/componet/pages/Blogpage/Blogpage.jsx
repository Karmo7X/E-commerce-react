import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';
import { Link } from 'react-router-dom';


import './blogpage.css'


const Blogpage = () => {
  return (
    <>
      <Meta title={"Blog"}/>
      <Breadcrumb title="Blog"/>
       <div className="Blogs">
      <div className="Blog-card align-items-center  justify-content-center ">
        <div className="container">
          <div class="row ">
               <div className="col-4">
                <div className="filter-card  mb-3">
                <h3 className="filter-title">Find By Category</h3>
                <div className="ps-0 list">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blog</li>
                  <li>Contact</li>

                </div>
                </div>
                </div>


                
                <div className="col-8">

                <div >
                  <div class="box mb-3   pb-5" data-work="Application">
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid  w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>
                  <div class="box mb-3   pb-5" data-work="Application">
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>

                </div>
                <div>
                  <div class="box mb-3   pb-5">
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>
                </div>
                <div >
                  <div class="box mb-3   pb-5">
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>

                </div>
                <div>
                  <div class="box mb-3   pb-5">
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>

                </div>
                <div >
                  <div class="box mb-3   pb-5" >
                  <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid w-100' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Single" className="btn btn-primary">Read More</Link>
                   
                  </div>

                </div>

                </div>

              </div>
        </div>
        
        </div>
        </div>
    </>
  )
}

export default Blogpage
