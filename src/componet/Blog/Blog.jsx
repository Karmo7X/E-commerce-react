import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import './Blog.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Blog = () => {
  return (
    <>
      <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
     
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
      <SwiperSlide>
      <section className='blogs p-5 p-5 '>
        <div className="container">
            <div className="blog align-items-center justify-content-center ">
                <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Blog" className="btn btn-primary">Read More</Link>
            </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className='blogs p-5 p-5 '>
        <div className="container">
            <div className="blog align-items-center justify-content-center ">
                <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                        
                    </p>
                </div>
                <Link to="/Blog" className="btn btn-primary">Read More</Link>
            </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className='blogs p-5 p-5 '>
        <div className="container">
            <div className="blog align-items-center justify-content-center ">
                <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                         
                    </p>
                </div>
                <Link to="/Blog" className="btn btn-primary">Read More</Link>
            </div>
        </div>
      </section>
      </SwiperSlide>
      <SwiperSlide>
      <section className='blogs p-5 '>
        <div className="container">
            <div className="blog align-items-center justify-content-center ">
                <div className="image">
                    <img src="./images/blog-1.jpg" alt="" className='img-fluid' />
                </div>
                <div className="content">
                    <h5 className='fw-bold fs-4'>A beautiful Sunday morning</h5>
                    <p className='text-dark '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia maxime corporis harum, voluptatibus commodi id repellendus, officia ex,
                         
                    </p>
                </div>
                <Link to="/Blog" className="btn btn-primary">Read More</Link>
            </div>
        </div>
      </section>
      </SwiperSlide>
      
    </Swiper>
    
    </>
  )
}

export default Blog
