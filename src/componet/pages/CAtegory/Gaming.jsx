import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import "./Gamig.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/grid";


const chairdata=[
    {
        id: 1,
        title: "chair gaming ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1800$",
        cover: "./images/categorygaming/chair1.png",
      },
      {
        id: 2,
        title: "chair Gaming ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1000$",
        cover: "./images/categorygaming/chair2.png",
      },
      {
        id: 3,
        title: "chair Gaming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1500$",
        cover: "./images/categorygaming/chair3.png",
      },
      {
        id: 4,
        title: "chair gaming",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"550$",
        cover: "./images/categorygaming/chair4.png",
      },
]


const headsetdata=[
    {
        id: 1,
        title: "headset ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"100$",
        cover: "./images/categorygaming/headset1.png",
      },
      {
        id: 2,
        title: "headset ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1000$",
        cover: "./images/categorygaming/headset2.png",
      },
      {
        id: 3,
        title: "headset",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"250$",
        cover: "./images/categorygaming/headset3.png",
      },
      {
        id: 4,
        title: "headset",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"150$",
        cover: "./images/categorygaming/headset4.png",
      },
]



const laptopdata=[
    {
        id: 1,
        title: "laptop ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"2000$",
        cover: "./images/categorygaming/laptop1.png",
      },
      {
        id: 2,
        title: "laptop ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1000$",
        cover: "./images/categorygaming/laptop2.png",
      },
      {
        id: 3,
        title: "laptop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"2500$",
        cover: "./images/categorygaming/laptop3.png",
      },
      {
        id: 4,
        title: "laptop",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"150$",
        cover: "./images/categorygaming/laptop4.png",
      },
]
const Graphiccarddata=[
    {
        id: 1,
        title: " PNY GeForce RTX™ 4080  ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1500$",
        cover: "./images/categorygaming/graphic1.jpg",
      },
      {
        id: 2,
        title: "ZOTAC Gaming GeForce RTX 3050 Twin Edge ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1800$",
        cover: "./images/categorygaming/graphic2.jpg",
      },
      {
        id: 3,
        title: "ZOTAC GeForce RTX™ 3070 Ti AMP Holo 8GB ",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1250$",
        cover: "./images/categorygaming/graphic3.jpg",
      },
      {
        id: 4,
        title: "ZOTAC Gaming GeForce RTX 4080 16GB Trinity OC",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        price:"1400$",
        cover: "./images/categorygaming/graphic4.jpg",
      },
]





const Gaming = () => {
  return (
    <>
      <Meta title={"Gaming"} />
      <Breadcrumb title="Gaming" />
       
      <h2 className='fw-bold fs-1'>Gaming chairs</h2>

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
        {chairdata.map(({title,desc,price,cover},index)=>{
            return(
             <SwiperSlide className='SwiperSlide'>
             <div className="container">
                <div className="row">
                    <div className="">
                        <div className="gaming d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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
    <h2 className='fw-bold fs-1'>Gaming Headset</h2>

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
        {headsetdata.map(({title,desc,price,cover},index)=>{
            return(
             <SwiperSlide className='SwiperSlide'>
             <div className="container">
                <div className="row">
                    <div className="">
                        <div className="gaming d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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

    <h2 className='fw-bold fs-1'>Laptops Gaming</h2>


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
        {laptopdata.map(({title,desc,price,cover},index)=>{
            return(
             <SwiperSlide className='SwiperSlide'>
             <div className="container">
                <div className="row">
                    <div className="">
                        <div className="gaming d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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


    <h2 className='fw-bold fs-1'>Graphic Cards</h2>


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
        {Graphiccarddata.map(({title,desc,price,cover},index)=>{
            return(
             <SwiperSlide className='SwiperSlide'>
             <div className="container">
                <div className="row">
                    <div className="">
                        <div className="gaming d-felx align-items-center justify-content-center mt-4 mb-4 p-5 position-relative  p-sm-5  ">
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

export default Gaming
