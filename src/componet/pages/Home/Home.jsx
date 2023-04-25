import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Meta from '../../breadcrumbMeta/Meta';
import Marquee from "react-fast-marquee";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Home.css'
import Blog from '../../Blog/Blog';
import FlashDeals from '../../FlashDeals/FlashDeals';
import Arrival from '../../New Arrival/Arrival';
import Product from '../../ourproduct/Product';
import { Link } from 'react-router-dom';



const Sdata = [
  {
    id: 1,
    title: "Discover Our Beauty",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/main/makeup.png",
  },
  {
    id: 2,
    title: "Shop Computers & Gaming Accessories",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/main/gaming.png",
  },
  {
    id: 3,
    title: "Choose Yor Favourite Sneakers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/main/sneakers.png",
  },
 
]





const Home = () => {


  return (
    
    <>
       <Meta title={"E-commerce"}/>
    
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        375: {
          
          slidesPerView: 1,
        },
        768: {
          
          slidesPerView: 2,
        },
        1024: {
          
          slidesPerView: 1,
        },


      }}
      
      
    >
      {Sdata.map(({title,desc,cover},index) =>{
        return(
          <SwiperSlide>
          <div className="container ">
            <div className="banner  mt-4 mb-4 p-5 d-flex align-items-center justify-content-center">

              <div className="contents">
                <h2 className='fw-bold fs-1 text'>{title}</h2>
                <p className='text'>{desc}</p>
                <button type='submit' className='btn btn-primary'>Show More</button>
              </div>
              <div className="images">
              <img src={cover} alt=""/>
              </div>
            </div>
          </div>
        </SwiperSlide>
        )
      })}
      
      
      
    </Swiper>

    
     <section className=' services pt-5 pb-5 '>
      <div className="container">
        <div className="service align-items-center d-flex text-center justify-content-center">
          <div className="row gap-4 ">
          <div class="col-sm-6 col-md-4 col-lg-2">
            <img src="./images/servic/service.png" alt="" className='pb-1'/>
            <h4 className='fw-bold mt-3'>Free Shopping</h4>
            <p className='text-dark fs-5'>From all orders over 5$</p>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 ">
            <img src="./images/servic/service-02.png" alt="" class=""/>
            <h4 className='fw-bold  mt-3'>Daily Surprise Offers</h4>
            <p className='text-dark fs-5'>Save Upto 25% off</p>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 ">
            <img src="./images/servic/service-03.png" alt="" class="img-fluid"/>
            <h4 className='fw-bold mt-3 '>Support 24/7</h4>
            <p className='text-dark fs-5'>Shop With An Expert</p>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 ">
            <img src="./images/servic/service-04.png" alt="" class="img-fluid"/>
            <h4 className='fw-bold  mt-3'>Affordable Prices</h4>
            <p className='text-dark fs-5'>Get Factory Default Price</p>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2 ">
            <img src="./images/servic/service-05.png" alt="" class="pb-2"/>
            <h4 className='fw-bold  mt-3'>Secure Payment</h4>
            <p className='text-dark fs-5'>Protected Payment</p>
          </div>
          </div>
        </div>
      </div>
     </section>
 


    <section className=' categories pt-5 pb-5 '>
      <div className="container">
      <h2 className='fw-bold fs-1'>Our Store</h2>
        <div className="category align-items-center  justify-content-center text-center">
        <div class="row ">
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3  pt-4 pb-5" data-work="Application">
                    <h2 className='fw-bold'>Gaming </h2>
                   <img src="./images/category/gaming.png" alt="" class="img-fluid pb-2 "/>
                   
                  </div>
                  <Link to="/Gaming" className='btn btn-primary m-2'>Show More</Link>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3  pt-4 pb-5" data-work="Application">
                  <h2 className='fw-bold'>Beauty picks</h2>
                   <img src="./images/category/beauty.png" alt="" class="img-fluid pb-2"/>
                   
                  </div>
                  <Link to="/Beauty" className='btn btn-primary m-2'>Show More</Link>

                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3 pb-3 pt-4 " data-work="Application">
                  <h2 className='fw-bold'>Electronics</h2>
                   <img src="./images/category/ele.jpg" alt="" class="img-fluid "/>
                   
                  </div>
                  <Link to="/Elecronics" className='btn btn-primary m-2'>Show More</Link>

                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3 pb-3 pt-4" data-work="Application">
                  <h2 className='fw-bold'>Sneakers</h2>
                   <img src="./images/category/sneakers.png" alt="" class="img-fluid  "/>
                   
                  </div>
                  <Link to="/Sneakers" className='btn btn-primary m-2'>Show More</Link>

                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3 pb-3 pt-4" data-work="Application">
                  <h2 className='fw-bold'>Watch</h2>
                   <img src="./images/category/watches.png" alt="" class="img-fluid "/>
                   
                  </div>
                  <Link to="/Watches" className='btn btn-primary m-2'>Show More</Link>
              
                </div>
                <div class="col-sm-6 col-md-3 col-lg-4">
                  <div class="box mb-3 pb-3 pt-4" data-work="Application">
                    <h2 className='fw-bold'>Books </h2>
                   <img src="./images/category/books.png" alt="" class="img-fluid "/>
                  </div>
                  <Link to="/Books"  className='btn btn-primary m-2'>Show More</Link>
                  
                </div>
              </div>
        </div>
      </div>
    </section>
      
    

    <section className="brands">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="marquee bg-white pt-5 pb-5">
               <Marquee className='d-flex'>
                <div className='mx-4 '>
                 <img src="./images/brands/brand-01.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-02.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-03.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-04.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-05.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-06.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-07.png" alt="" />
                </div>
                <div className='mx-4 '>
                <img src="./images/brands/brand-08.png" alt="" />
                </div>
               </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog">
      <div className="container">
        <h2 className='fw-bold fs-1'>Our Latest News</h2>
        <Blog/>
      </div>
    </section>


    <section className="FlashDeals">
      <div className="container">
        <h2 className='fw-bold fs-1'>FlashDeals</h2>
        <FlashDeals/>
      </div>
    </section>


    <section className="New Arrivals">
      <div className="container">
        <h2 className='fw-bold fs-1'>New Arrivals</h2>
        <Arrival/>
      </div>
    </section>


    <section className="Our products">
      <div className="container">
        <h2 className='fw-bold fs-1'>Our products</h2>
        <Product/>
      </div>
    </section>



      
    
    
    </>
  )
}

export default Home
