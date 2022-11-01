import { React, useState, useEffect } from 'react';
import { db } from '../FirebaseConfig';
import "./feedS.css";
import MessageSender from './MessageSender';
import Post from './Post'; 
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState( [] );
  
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  

  useEffect(() => {
    
    //real time update
    
    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            // console.log("onsnapshot", doc.data());
        })
    })
}, []);

  return (
    <div className='feed'>
      {/* {StartFeed} */}
      <MessageSender />

      {posts.map((post) => (
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        
        />
      ))}
    </div>
  );
}

export default Feed;