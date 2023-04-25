import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import "./Gamig.css"


const accessoriedata=[
    {
        id: 1,
        title: "Micger Galaxy S23 Screen Protector ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"9$",
        cover: "./images/Electronics/ele1.jpg",
      },
      {
        id: 2,
        title: " Screen Protector for iPhone 14 Pro ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"14$",
        cover: "./images/Electronics/ele2.jpg",
      },
      {
        id: 3,
        title: " Screen Protector iPhone 11",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"20$",
        cover: "./images/Electronics/ele3.jpg",
      },
      {
        id: 4,
        title: "Cell Phone Stand",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"550$",
        cover: "./images/Electronics/ele4.jpg",
      },
]

const accessorie2data=[
    {
        id: 1,
        title: "HP 64XL Black High-yield ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"9$",
        cover: "./images/Electronics/ele5.jpg",
      },
      {
        id: 2,
        title: " HP 65XL Black High-yield",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"14$",
        cover: "./images/Electronics/ele6.jpg",
      },
      {
        id: 3,
        title: " HP 952XL Black High-yield",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"20$",
        cover: "./images/Electronics/ele7.jpg",
      },
      {
        id: 4,
        title: "HP 902XL Black High-yield",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"550$",
        cover: "./images/Electronics/ele8.jpg",
      },
]





const ELectronic = () => {
  return (
    <>
    <Meta title={"ELectronics"} />
    <Breadcrumb title="Eletronics" />
     
    <h2 className='fw-bold fs-1'>Accessories</h2>

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
      {accessoriedata.map(({title,desc,price,cover},index)=>{
          return(
           <SwiperSlide className='SwiperSlide'>
           <div className="container">
              <div className="row">
                  <div className="">
                      <div className="electronics d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
                  <div className="wishlist-icon position-absolute">
                  <Link>
                          <img src="./images/wish.svg" alt="" />
                  </Link>
                  </div>
                   <div className="image ">
                       <img src={cover} alt=""/>
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
      {accessorie2data.map(({title,desc,price,cover},index)=>{
          return(
           <SwiperSlide className='SwiperSlide'>
           <div className="container">
              <div className="row">
                  <div className="">
                      <div className="electronics d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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

export default ELectronic
