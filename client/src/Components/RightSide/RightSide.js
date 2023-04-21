import React from 'react';
import './RightSide.css';
import Home from '../../Img/home.png';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Noti from '../../Img/noti.png';
import Comment from '../../Img/comment.png';

const RightSide = () => {
    return (
        <div className='RightSide'>
            <div className="navIcons">
                <img src={Home} alt="" />
                <SettingsOutlinedIcon />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>
        </div>
    )
}

export default RightSide
