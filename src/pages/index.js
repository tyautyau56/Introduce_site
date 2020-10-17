import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = "tyautyau56's  portfolio"
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: 'ja',
        }}>
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
            web開発やドラムをしている高専生です.いつもはNITTCの同学年でやっている<a href="https://github.com/tokuyama-it" target="_blank" rel="noreferrer">ITをむさぼる会</a>で開発などをして活動しています.<br/>TypeScriptとRustを勉強中です.
          </p>
        </section>
        <section id="two">
          <h2>Educational background</h2>
          <ul className="actions">
            <li>2019年 3月 周南市立須々万中学校卒業</li><br/>
            <li>2019年 4月 徳山工業高等専門学校 情報電子工学科 入学</li>
            <li>2020年 現在 徳山工業高等専門学校 情報電子工学科 在学中</li>
          </ul>
        </section>
        <section id="three">
          <ul className="actions">
            <li></li>
          </ul>
        </section>
        <section id="four">
          <h2>Performance</h2>
          <ul className="actions">
            <li><p>そのうち実績ができることだろう</p></li>
          </ul>
        </section>
        <section id="five">
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
