import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Feed.css'
const Feed = (props) => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('user-info.json')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post
                    key={post.id}
                    post={post}
                    time={props.time}
                ></Post>)
            }
        </div>
    );
};

export default Feed;