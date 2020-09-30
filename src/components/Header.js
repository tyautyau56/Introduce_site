import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="tyautyau56's avatar" />
      </a>
      <h1>
        <strong>tyautyau56</strong>
      </h1>
      <p>
        #kosen19s<br/>
        NIT,Tokuyama College IE2
      </p>
    </div>
    <Footer />
  </header>
)

export default Header
