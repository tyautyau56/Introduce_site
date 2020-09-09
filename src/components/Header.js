import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Strata</strong>, a super simple
        <br />
        responsive site template freebie
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
