import React from 'react';
import './Profile.css';
import ProfilePageLeft from '../../Components/ProfilePageLeft/ProfilePageLeft';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';


const Profile = () => {
  return (
    <div className='Profile'>
      <ProfilePageLeft />

      <div className="ProfilePage-Center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>


      <RightSide />

    </div>
  )
}

export default Profile
