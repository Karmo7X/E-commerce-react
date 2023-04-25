import React from 'react'
import './footer.css'
import { NavLink ,Link  } from 'react-router-dom'
import { AiFillFacebook ,AiFillInstagram ,AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';



const Foote = () => {
  return (
    <>
      <footer className="py-4 footer-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg3">
              <div className="d-flex align-items-center gap-4 p-3">
                <img src="./images/newsletter.png" alt="" />
                <h2 className=" text-white ">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-md-6 col-lg3">
              <div class="input-group mb-3 p-3" >
              <input type="password" class="form-control px-3" id="inputPassword2" placeholder="Your Email"/>
                <button type='submit' className='btn  btn-outline-primary '>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <h4 className='head mb-4 mt-3'>Contact US</h4>
            <address className='text-white fs-6'>
              Location: Cario ,Egypt <br/>
              pincode :3753450
            </address>
            <a className="text-white mt-4 d-block mb-2" href="tel:+20 01020499241">
                +20 01020499241
              </a>
              <a className="text-white mt-4 d-block mb-3" href="mailto:maxmr343@gmail.com">
                maxmr343@gmail.com
              </a>

              <div className="social d-flex align-items-center gap-4 fs-5 ">
                <a href="">
                <AiFillFacebook className='text-white'/>
                </a>
                <a href="">
                <AiFillInstagram className='text-white'/>
                </a>
                <a href="">
                 <AiFillYoutube className='text-white'/>
                </a>
                <a href="">
                 <AiFillLinkedin className='text-white'/>
                </a>
              </div>
          </div>
          <div className="col-md-6 col-lg-2">
          <h4 className='head mb-2 mt-3'>Information</h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1' to="/Privacy policy">Privacy Policy</Link>
            <Link className='text-white py-2 mb-1' to="/Refund policy">Refund Policy</Link>
            <Link className='text-white py-2 mb-1' to="/Shopping policy">Shopping Policy</Link>
            <Link className='text-white py-2 mb-1' to="/TermsCondition">Terms & Conditions</Link>
            <Link className='text-white py-2 mb-1' to="/Blog">Blogs</Link>
          </div>
          </div>
          <div className="col-md-6 col-lg-2">
          
          <h4 className='head mb-2 mt-3'>Account </h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>FAQ</Link>
            <Link className='text-white py-2 mb-1' to="/Contact">Contact</Link>

          </div>
          </div>
          <div className="col-md-6 col-lg-2">
          
          <h4 className='head mb-2 mt-3'>Quick links</h4>
          <div className="footer-links d-flex flex-column">
            <Link className='text-white py-2 mb-1' to="/Gaming">Gaming</Link>
            <Link className='text-white py-2 mb-1' to="/Beauty">Beauty picks</Link>
            <Link className='text-white py-2 mb-1' to="/Elecronics">Electronics</Link>
            <Link className='text-white py-2 mb-1' to="/Watches">Watch</Link>
            <Link className='text-white py-2 mb-1' to="/Sneakers">Sneakers</Link>
            <Link className='text-white py-2 mb-1' to="/">Books</Link>
          </div>
          </div>


        </div>
      </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                &copy;{new Date().getFullYear()} powered by KarmoDev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foote
