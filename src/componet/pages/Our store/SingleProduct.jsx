import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';

import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import "./singleproduct.css"

const SingleProduct = () => {

    const [orderedProduct, setorderedProduct]=useState(true)


    



  return (
    <>
      <Meta title={"Product Name"} />
      <Breadcrumb title="Product Name" />
      <div className="singleproduct">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="product-image">
                <img src="./images/our products/monitor.png" alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="prodcut-content">
                <h3 className="fw-bold">LCD</h3>
                <p className="text-dark mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                  nostrum amet officia iste! Doloribus, iste nihil ullam
                  dignissimos quia quos, et minus ea aut saepe a quo id. Quae,
                  perferendis.
                </p>
                <p className="fw-bold mt-3">1000$</p>
                <ReactStars count={5} size={24} activeColor="#ffd700" />
              </div>
              <div className='mt-3'>
                <a href="#reviews" className="text-dark ">
                  {" "}
                  Write Review
                </a>
              </div>
              <div className="mt-3">
                <div className='d-flex  gap-3 '>
                  <h3 className='fw-bold fs-6'>Type :</h3><p>Monitor</p>
                </div>
                <div className='d-flex  gap-3 '>
                <h3 className='fw-bold fs-6'> Category :</h3><p>Monitors</p>
                </div>
                <div className='d-flex  gap-3 '>
                <h3 className='fw-bold fs-6'>Tags :</h3><p>Monsitors</p>
                </div>
                <div className='d-flex  gap-3 '>
                <h3 className='fw-bold fs-6'>Avilabilty :</h3><p>In stock</p>
                </div>
              </div>
              <div className="d-flex flex-column gap-3 ">
                  <h3 className="fw-bold fs-6"> Quantity :</h3>
                  <div>
                    <input type="number" min={1} max={10} className="form-control"  style={{width:"70px"}} />
                  </div>
              </div>

              <div className='d-flex align-items-center justify-content-end mt-5 gap-2'>
                <Link to="/" className="btn btn-primary">
                  Add Cart
                </Link>
                <Link to="/" className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
              <div>
                <a href="" > <AiOutlineHeart className='fs-5'/>   Add wishlist</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="description">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold ">Description</h4>
              <p className="text-dark p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                nesciunt minima quia voluptas voluptates velit atque temporibus
                in minus, suscipit, reprehenderit magni molestiae ut a provident
                nemo aperiam eius dolorem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold mb-3">Reviews</h4>
              <div className="reviews-in">
                <div className="reviews-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="fw-bold mb-2 ">Customer Review</h4>
                    <div className="d-flex align-items-center gap-1">
                      <ReactStars count={5} size={24} activeColor="#ffd700" />
                      <p className="text-dark mb-0 ">Based on 2 Reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <div>
                        <a
                          href=""
                          className="text-dark text-decoration-underline"
                        >
                          Write Review
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="form mt-5 mb-5">
                <h6>Write A Reviews</h6>
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
                    <h6>Rating</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Review title"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary ">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct
