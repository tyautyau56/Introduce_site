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
              自己紹介
            </h2>
          </header>
          <p>
            web開発やドラムをしている高専生です。いつもはNITTCの同学年でやっているITをむさぼる会で開発などをして活動しています。
          </p>
        </section>
        <section id="two">
          <h2>最近の活動</h2>
          <Gallery />
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>
        <section id="three">
          <p>
            このサイトはGatsby.jsを使用して作らせてもらいました
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
