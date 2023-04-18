import React, { useState, useRef } from 'react'
import './PostShare.css';
import ProfileImage from '../../Img/profileImg.jpg';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const PostShare = () => {

    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            });
        }
    }

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />

            <div>
                <input type="text" placeholder='Write a caption...' />

                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <PhotoOutlinedIcon />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <PlayCircleOutlineIcon />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <LocationOnOutlinedIcon />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--shedule)" }}>
                        <CalendarMonthOutlinedIcon />
                        Shedule
                    </div>

                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name='myImage'
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>


                {image && (
                    <div className="previewImage">
                        <CloseOutlinedIcon onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default PostShare
