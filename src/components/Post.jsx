import { HdrWeak } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import "./PostS.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className='post'>
        <div className="post_top">
            <Avatar src={profilePic} className='post_avatar' />
            <div className="post-topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>

        <div className="post_bottom">
            <p>{message}</p>
        </div>
        <div className="post_image">
            <img src={image} alt="" />
        </div>

        <div className="post_options">
            <div className="post_option">
                <HdrWeak />
                <p>e-Like</p>
            </div>
            <div className="post_option">
                <HdrWeak />
                <p>e-Comment</p>
            </div>
            <div className="post_option">
                <HdrWeak />
                <p>e-Share</p>
            </div>
             <div className="post_option">
                <HdrWeak />

            </div>
        </div>
    </div>
  )
}

export default Post;