import React from 'react';
import './ProfilePageLeft.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import InfoCard from '../InfoCard/InfoCard';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfilePageLeft = () => {
  return (
    <div className='ProfilePageLeft'>
       <LogoSearch />
       <InfoCard />
       <FollowersCard />
    </div>
  )
}

export default ProfilePageLeft
