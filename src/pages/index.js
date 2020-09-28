import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = "tyautyau56's  portfolio"
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Self-Introduction
            </h2>
          </header>
          <p>
            web開発やドラムをしている高専生です。いつもはNITTCの同学年でやっている<a href="https://github.com/tokuyama-it" target="_blank" rel="noreferrer">ITをむさぼる会</a>で開発などをして活動しています。<br/>
          </p>
        </section>
        <section id="two">
          <h2>Recent Work</h2>
          <Gallery />
          <ul className="actions">
            <li>
              <a href="https://github.com/tyautyau56" className="button" target="_blank" rel="noreferrer">
                My Github
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
