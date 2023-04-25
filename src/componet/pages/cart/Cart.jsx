import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';
import { Link } from 'react-router-dom';
import "./cart.css"


const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Breadcrumb title="Cart" />
      <section className="carts">
        <div className="container">
          <div className="row">
            <div className="col-12 gap-2">
              <div className="cart-header d-flex align-items-center justify-content-between gap-3">
                <h4 className="cart-col-1 col-2">Product</h4>
                <h4 className="cart-col-2 col-4">Price</h4>
                <h4 className="cart-col-3 col-2">Quantity</h4>
                <h4 className="cart-col-4 col-4">Total</h4>
              </div>
              <div className="cart-data d-flex align-items-center justify-content-between">
                <div className="cart-col-1 col-2 d-flex align-items-center ">
                  <div className="w-75 ">
                    <img
                      src="./images/flash Deals/watch.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="fw-bold title fs-6">Product Name</h5>
                    <p className="text-dark desc">description</p>
                  </div>
                </div>
                <div className="cart-col-2 col-4">
                  <h5 className="fw-bold price fs-6">1000$</h5>
                </div>
                <div className="cart-col-3 col-2  ">
                  <div className='p-2'>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control "
                      style={{ width: "50px" }}
                    />
                  </div>
                </div>
                <div className="cart-col-4 col-4">
                  <h5 className="fw-bold price fs-6 px-2">1000$</h5>
                </div>
              </div>

              <div className='mt-5 d-flex justify-content-end gap-3'>
                <Link to="/Store" className="btn btn-primary">
                  Continue Shopping
                </Link>
                    <Link to="/Checkout" className="btn btn-primary">
                  checkout
                </Link>
                </div>
              </div>
            </div>
            
          </div>
        
      </section>
    </>
  );
}

export default Cart
