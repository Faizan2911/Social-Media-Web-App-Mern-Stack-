import React, { useState, useRef } from 'react'
import './PostShare.css';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';



const PostShare = () => {

    const loading = useSelector((state) => state.postReducer.uploading)
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const dispatch = useDispatch();
    const desc = useRef();
    const { user } = useSelector((state) => state.authReducer.authData);
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }




    const reset = () => {
        setImage(null);
        desc.current.value = ""
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }

        if (image) {
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file", image);

            newPost.image = filename;

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }

        dispatch(uploadPost(newPost))
        reset()
    }

    return (
        <div className="PostShare">
            <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />

            <div>
                <input type="text" placeholder='Write a caption...' required ref={desc} />

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

                    <button className='button ps-button' onClick={handleSubmit} disabled={loading}>
                        {loading ? "uploading..." : "Share"}
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
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default PostShare
