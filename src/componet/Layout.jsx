import React from 'react'
import { Outlet } from 'react-router-dom'
import Foote from './Footer/Foote';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Foote/>
    </>
  )
}

export default Layout
