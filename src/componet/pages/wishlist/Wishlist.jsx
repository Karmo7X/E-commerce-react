import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';

import './wishlist.css'

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <Breadcrumb title="Wishlist" />
      <div className="wishlists">
        <div className="container">
            <div className="row">
            <div className="wishlist d-felx align-items-center justify-content-center mt-4 mb-4 p-4 position-relative p-sm-4  col-sm-6 col-md-3 col-lg-4  ">
                   <div className="wishlist-card position-relative">
                    
                            <img src="./images/cross.svg" alt="" className='position-absolute cross img-fluid' />
                    
                    </div>
                     <div className="wishlist-image">
                         <img src="./images/flash Deals/watch.png" alt="" />
                     </div>
                     <div className="content pt-3">
                         <h4 className='fw-bold'>jaghdshajdjdajdkgkkg</h4>
                         <h5>ahhfhjdsjgv</h5>
                         <p className='fw-bold'>1000$</p>
                         
                     </div>
                     
                    </div>  
                    
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist
