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
        <strong>tyautyau56</strong>
      </h1>
      <p>
        NITTC IE2<br/>
        #kosen19s
      </p>
    </div>
    <Footer />
  </header>
)

export default Header
