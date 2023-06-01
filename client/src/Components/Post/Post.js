import React from 'react';
import './Post.css';
import Comment from '../../Img/comment.png';
import Share from '../../Img/share.png';
import Like from '../../Img/like.png';
import Notlike from '../../Img/notlike.png';
import { useSelector } from 'react-redux';

const Post = ({ data }) => {

  const { user } = useSelector((state) => state.authReducer.authData)

  return (
    <div className='Post'>

      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : " "} alt="" />

      <div className="postReact">
        <img src={data.liked ? Like : Notlike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '14px' }}>{data.likes} likes</span>

      <div className="detail">
        <span> <b>{data.name}</b> </span>
        <span>{data.desc}</span>
      </div>

    </div>
  )
}

export default Post
