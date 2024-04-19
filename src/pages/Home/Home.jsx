import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Room from '../../components/Room/Room'
import Book from '../../components/Book/Book'
import Night from '../../components/Night/Night'
import Weeding from '../../components/Weding/Weeding'
import Address from '../../components/Address/Address'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Room />
      <Book />
      <Night />
      <Weeding />
      <Address />
      <Footer />
    </div>
  )
}

export default Home