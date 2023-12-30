import React from 'react'

import {Header, About, Services, Menu, Footer, Home } from "../component";
const HomePage = () => {
  return (
    <>
    <Header textColor={'white'}/>
    <Home/>
    <About/>
    <Services/>
    <Menu/>
    <Footer/>
    </>
  )
}

export default HomePage