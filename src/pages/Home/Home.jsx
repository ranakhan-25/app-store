import React from 'react'
import Stars from './Stars'
import Trending from './Trending'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Stars />
      <Trending/>
    </div>
  )
}

export default Home