import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import './ourstore.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';




const productdata=[
  {
      id: 1,
      title: "LCD",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price:"1500$",
      cover: "./images/our products/monitor.png",
    },
    {
      id: 2,
      title: "Monitor Gaming ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price:"1000$",
      cover: "./images/our products/monitor gaming.png",
    },
    {
      id: 3,
      title: " Book Play Dead",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price:"250$",
      cover: "./images/our products/book.png",
    },
    {
      id: 4,
      title: "Millie Maven Bundle",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price:"150$",
      cover: "./images/our products/book1.png",
    },
    {
      id: 5,
      title: " Air force Sneakers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      price:"5000$",
      cover: "./images/new arrival/sneakers.png",
      
    },
]




const Ourstore = () => {
  
  return (
    <>
      <Meta title={"Our Store"}/>
      <Breadcrumb title="Our Store"/>
      <Link to="/singleproduct" className="store">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="filter-card  mb-3">
                <h3 className="filter-title">Shop By Category</h3>
                <div className="ps-0 list">
                  <li>Gaming Accessories</li>
                  <li>Beauty picks</li>
                  <li>Electronics</li>
                  <li>Sneakers</li>
                  <li>Watch</li>
                  <li>Books</li>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlfor="">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlfor="">
                    Out of Stock(0)
                  </label>
                </div>
                <h5 className="sub-title">price</h5>
                <div className="d-flex align-items-center gap-2">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label ghtmlfor="floatingInput">From</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label ghtmlfor="floatingInput">To</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 gap-1">
                <h3 className="filter-title">Product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-1">
                    <span className="badge bg-secondary rounded-3 py-2">
                      Gaming
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2">
                      Headset
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2">
                      books
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2">
                      Sneakers
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2">
                      Watch
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card align-items-center jsutify-content-center text-center mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product  mt-3">
                    <div >
                      <img
                        src="./images/our products/monitor gaming.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div >
                      <h5 className="fw-bold">Monitor Gaming</h5>
                      <p>1000$</p>
                     
                    </div>
                  </div>

                  <div className="random-product  mt-3">
                    <div>
                      <img
                        src="./images/flash Deals/pc.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h5 className="fw-bold">PC Gaming</h5>
                      <p>1500$</p>
                    
                    </div>
                  </div> 
                  <div className="random-product  mt-3">
                    <div>
                      <img
                        src="./images/flash Deals/laptop.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h5 className="fw-bold">Laptop Gaming</h5>
                      <p>1500$</p>
                      
                    </div>
                  </div> 
                  <div className="random-product  mt-1">
                    <div>
                      <img
                        src="./images/new arrival/chair gaming.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div >
                      <h5 className="fw-bold">Chair Gaming</h5>
                      <p>1500$</p>
                   
                    </div>
                  </div> 


                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="filter-sort-grid ">
                <div className="d-flex align-items-center jsutify-content-between ">
                  <p className="text-dark fw-bold mb-0  d-block sort-width">
                    Sort By
                  </p>
                  <select name="" id="" className="form-control form-select  ">
                    <option value="manual">Featured</option>
                    <option value="" selected="selected">
                      Best selling
                    </option>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                    <option value="">Price .Low to High</option>
                    <option value="">price,High to Low</option>
                    <option value="">price,High to Low</option>
                  </select>
                </div>
              </div>

              <div className="products-list pb-5">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    360: {
                      slidesPerView: 1,
                    },
                    375: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {productdata.map(({ title, desc, price, cover }, index) => {
                    return (
                      <SwiperSlide className="SwiperSlide ">
                        <div className="container">
                          <div className="row">
                            <div className="">
                              <div className="product d-felx align-items-center justify-content-center mt-4 mb-5 p-5 position-relative  p-sm-5  ">
                                <div className="wishlist-icon position-absolute">
                                  <Link>
                                    <img src="./images/wish.svg" alt="" />
                                  </Link>
                                </div>
                                <div className="image ">
                                  <img src={cover} alt="" />
                                </div>
                                <div className="content pt-3">
                                  <h4 className="fw-bold">{title}</h4>
                                  <h5>{desc}</h5>
                                  <p className="fw-bold">{price}</p>
                                  <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                  />
                                  ,
                                </div>
                                <div className="action-bar position-absolute">
                                  <div className="d-flex flex-column">
                                    <Link>
                                      <img
                                        src="./images/prodcompare.svg"
                                        alt=""
                                      />
                                    </Link>
                                    <Link>
                                      <img src="./images/view.svg" alt="" />
                                    </Link>
                                    <Link>
                                      <img src="./images/add-cart.svg" alt="" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="count">
                                  <p className="text-dark fs-4">Product: 4</p>
                                  <div className="progress mt-3 mb-3">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>

                                <Link to="/" className="btn btn-primary">
                                  Add Cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    360: {
          
                      slidesPerView: 1,
                    },
                    375: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {productdata.map(({ title, desc, price, cover }, index) => {
                    return (
                      <SwiperSlide className="SwiperSlide">
                        <div className="container">
                          <div className="row">
                            <div className="">
                              <div className="product d-felx align-items-center justify-content-center mt-4 mb-5 p-5 position-relative  p-sm-5  ">
                                <div className="wishlist-icon position-absolute">
                                  <Link>
                                    <img src="./images/wish.svg" alt="" />
                                  </Link>
                                </div>
                                <div className="image ">
                                  <img src={cover} alt="" />
                                </div>
                                <div className="content pt-3">
                                  <h4 className="fw-bold">{title}</h4>
                                  <h5>{desc}</h5>
                                  <p className="fw-bold">{price}</p>
                                  <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                  />
                                  ,
                                </div>
                                <div className="action-bar position-absolute">
                                  <div className="d-flex flex-column">
                                    <Link>
                                      <img
                                        src="./images/prodcompare.svg"
                                        alt=""
                                      />
                                    </Link>
                                    <Link>
                                      <img src="./images/view.svg" alt="" />
                                    </Link>
                                    <Link>
                                      <img src="./images/add-cart.svg" alt="" />
                                    </Link>
                                  </div>
                                </div>
                                <div className="count">
                                  <p className="text-dark fs-4">Product: 4</p>
                                  <div className="progress mt-3 mb-3">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>

                                <Link to="/" className="btn btn-primary">
                                  Add Cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Ourstore
