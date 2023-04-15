import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
         <LogoSearch />
         <ProfileCard />
    </div>
  )
}

export default ProfileSide

