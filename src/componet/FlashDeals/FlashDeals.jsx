import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import './flash.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";


const flashdata=[
    {
        id: 1,
        title: "Mouse & keyboard",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"100$",
        cover: "./images/flash Deals/laptop.png",
      },
      {
        id: 2,
        title: "PC Gaming ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1000$",
        cover: "./images/flash Deals/pc.png",
      },
      {
        id: 3,
        title: "Pefrum Boss",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"250$",
        cover: "./images/flash Deals/perfum.png",
      },
      {
        id: 4,
        title: "Watch",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"150$",
        cover: "./images/flash Deals/watch.png",
      },
]




const FlashDeals = () => {
  return (
    <>

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
        {flashdata.map(({title,desc,price,cover},index)=>{
            return(
             <SwiperSlide className='SwiperSlide'>
             <div className="container">
                <div className="row">
                    <div className="">
                        <div className="flashdeal d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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

export default FlashDeals
