import React from 'react'
import './Header.css'
import { NavLink ,Link  } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa';
import { BsSearch} from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className="py-3 header-top">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <p className="mb-1 text-white">Free Shopping Over 100$ & Free Returns</p>
            </div>
            <div className="col-6 text-end text-white">
              <FaPhone />{" "}
              <a className="text-white" href="tel:+20 01020499241">
                +20 01020499241
              </a>
            </div>
          </div>
        </div>
      </header>


    
      <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand logo " href="#">
      <img src="./images/logo.png" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item">
        <NavLink className=" nav-link text-white" to="/">Home</NavLink>
        </li>

        <li class="nav-item">
        <NavLink className=" nav-link text-white" to="/Store">Our Store</NavLink>
        </li>


        <li class="nav-item">
        <NavLink className=" nav-link text-white" to="/Blog">Blog</NavLink>
        </li>

        <li class="nav-item">
        <NavLink className=" nav-link text-white" to="/Contact">Contact</NavLink>
        </li>


        <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       <img src="./images/menu.svg" alt="" /> <span>Shop Category</span>
      </button>
     <ul class="dropdown-menu dropdown-menu-dark">
    <li><Link class="dropdown-item text-white bg-transparent" to="/Gaming">Gaming Accessories</Link></li>
    <li><Link class="dropdown-item text-white bg-transparent" to="/Beauty">Beauty picks</Link></li>
    <li><Link class="dropdown-item text-white bg-transparent" to="/Elecronics">Electronics</Link></li>
    <li><Link class="dropdown-item text-white bg-transparent" to="/Sneakers">Sneakers</Link></li>
    <li><Link class="dropdown-item text-white bg-transparent" to="/Watches">Watch</Link></li>
    <li><Link class="dropdown-item text-white bg-transparent" to="/Books">Books</Link></li>

    </ul>
   </div>

      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/Login'>
            <div className=" item d-flex align-item-center gap-10">
              <img src="./images/user.svg" alt="" />
              <p >Login <br/> Account</p>
            </div>
          </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to='/wishlist'>
        <div className=" item d-flex align-item-center gap-10">
              <img src="./images/wishlist.svg" alt="" />
              <p >Favourite <br/> Wishlist</p>
            </div>
        </Link>
        </li>

        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/cart">
        <div className=" item d-flex align-item-center gap-10">
              <img src="./images/cart.svg" alt="" />
              <div className="  item  d-flex flex-column ">  

                 <span className='badge bg-white text-dark'>0</span>
                 <p > 100$</p>
              </div> 
             
            </div>
        </Link>
        </li>

   
        
      </ul>
      
    </div>
  </div>
</nav>

 




  
    </>
  );
}

export default Header
