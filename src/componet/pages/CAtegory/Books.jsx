import React from 'react'
import Breadcrumb from '../../breadcrumbMeta/Breadcrumb';
import Meta from '../../breadcrumbMeta/Meta';

const Books = () => {
  return (
    <>
        <Meta title={"Books"} />
    <Breadcrumb title="Books" />
    <div className="books">
        <div className="container">
            <div className="books text-center">
                <p className='fw-bold fs-1'>Coming Soon</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Books
