import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/profileSide/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <div className="postSide">post</div>
        <div className="rightSide">rightSide</div>
    </div>
  )
}

export default Home
