import { PhotoLibrary, Topic } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../FirebaseConfig"; 
import { UserAuth } from "../context/UserAuthContext";

import "./MessageSenderS.css"

function MessageSender() {

    const { user } = UserAuth();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState(''); 
    const collectionRef = collection(db, "posts");

    const handleSubmit = e => {
        e.preventDefault();
        addDoc(collectionRef, {
            message: input,
            timestamp: serverTimestamp(),
            // add the user from authprovider
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    }; 



  return (
    <div className='messageSender'>
        <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} className='messageSender__input' placeholder='' />
                <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder='IMG' />

                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
        </div>
        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <PhotoLibrary style={{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <Topic style={{ color: "brown" }} />
                <h3>Topic</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender;