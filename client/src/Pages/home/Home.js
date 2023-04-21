import React from 'react'
import './Home.css'
import ProfileSide from '../../Components/profileSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
    </div>
  )
}

export default Home
