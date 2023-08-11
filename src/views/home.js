import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Magnificent Tart Zebra</title>
        <meta property="og:title" content="Magnificent Tart Zebra" />
      </Helmet>
      <a href="https://prokla.jaoeta.sa.com/" className="home-link">
        <img alt="image" src="/523533-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
