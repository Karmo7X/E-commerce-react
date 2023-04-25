import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';


import  "./contact.css"
const Contactus = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <Breadcrumb title="Contact" />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-12 mt-5">
              <div className="contactus d-flex justify-content-between p-4">
                <div className="mb-4 ">
                  <h3 className="fw-bold">Contact US</h3>
                  <form action="" className="d-flex flex-column gap-3">
                    <div>
                      <input
                        type="text"
                        className="form-control "
                        placeholder=" Your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Your Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary ">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6840.060046171916!2d31.625843388360604!3d30.99754003894701!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1677961374665!5m2!1sar!2seg"
                    width="600"
                    height="450"
                    className="border: 0; w-100"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus
