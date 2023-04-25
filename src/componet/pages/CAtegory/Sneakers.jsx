import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import "./Gamig.css"


const sneakerdata=[
    {
        id: 1,
        title: "Nike Free Air Force ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"300$",
        cover: "./images/Sneakers/sneaker1.png",
      },
      {
        id: 2,
        title: "Air Max Sneakers ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"300$",
        cover: "./images/Sneakers/sneaker2.png",
      },
      {
        id: 3,
        title: " Jumpman Air Jordan, Red  White",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"200$",
        cover: "./images/Sneakers/sneaker3.png",
      },
      {
        id: 4,
        title: " basketballschuh Red And White",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"550$",
        cover: "../images/Sneakers/sneaker4.png",
      },
]




const Sneakers = () => {
  return (
    <>
    <Meta title={"Sneakers"} />
    <Breadcrumb title="Sneakers" />
     
    <h2 className='fw-bold fs-1'>Sneakers</h2>

    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={3}
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
        
        slidesPerView: 2,
      },
       1024: {
          slidesPerView: 3,
        },
    }}
   
    
  >
      {sneakerdata.map(({title,desc,price,cover},index)=>{
          return(
           <SwiperSlide className='SwiperSlide'>
           <div className="container">
              <div className="row">
                  <div className="">
                      <div className="beauty d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
                  <div className="wishlist-icon position-absolute">
                  <Link>
                          <img src="./images/wish.svg" alt="" />
                  </Link>
                  </div>
                   <div className="image ">
                       <img src={cover} alt="" />
                   </div>
                   <div className="content pt-3">
                       <h4 className='fw-bold'>{title}</h4>
                       <h5>{desc}</h5>
                       <p className='fw-bold'>{price}</p>
                       <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                       />,
                   </div>
                   <div className="action-bar position-absolute">
                      <div className="d-flex flex-column">
                         
                          <Link>
                          <img src="./images/add-cart.svg" alt="" />
                          </Link>
                      </div>
                   </div>
                   <div className="count">
                        <p className='text-dark fs-4'>Product: 4</p>
                        <div className="progress mt-3 mb-3">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{width: "25%"}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                   
                   <Link to="/" className="btn btn-primary">Add Cart</Link>
                  </div>
                  </div>
              </div>
               
                  </div>
              
           
         </SwiperSlide>
      )})}
    
   
  </Swiper>


  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={3}
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
        
        slidesPerView: 2,
      },
       1024: {
          slidesPerView: 3,
        },
    }}
   
    
  >
      {sneakerdata.map(({title,desc,price,cover},index)=>{
          return(
           <SwiperSlide className='SwiperSlide'>
           <div className="container">
              <div className="row">
                  <div className="">
                      <div className="beauty d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
                  <div className="wishlist-icon position-absolute">
                  <Link>
                          <img src="./images/wish.svg" alt="" />
                  </Link>
                  </div>
                   <div className="image ">
                       <img src={cover} alt="" />
                   </div>
                   <div className="content pt-3">
                       <h4 className='fw-bold'>{title}</h4>
                       <h5>{desc}</h5>
                       <p className='fw-bold'>{price}</p>
                       <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                       />,
                   </div>
                   <div className="action-bar position-absolute">
                      <div className="d-flex flex-column">
                         
                          <Link>
                          <img src="./images/add-cart.svg" alt="" />
                          </Link>
                      </div>
                   </div>
                   <div className="count">
                        <p className='text-dark fs-4'>Product: 4</p>
                        <div className="progress mt-3 mb-3">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{width: "25%"}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                   
                   <Link to="/" className="btn btn-primary">Add Cart</Link>
                  </div>
                  </div>
              </div>
               
                  </div>
              
           
         </SwiperSlide>
      )})}
    
   
  </Swiper>



  </>
  )
}

export default Sneakers
