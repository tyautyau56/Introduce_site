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
        #kosen19s<br/>
        徳山高専　情報電子工学科 学生
      </p>
    </div>
    <Footer />
  </header>
)

export default Header
