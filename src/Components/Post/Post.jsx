import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {
    const { id, name, userImg, post, release, readTime, hasTags, postImg } = props.post;
    return (
        <div className='post-container'>
            <img className='post-img' src={postImg} alt="" />
            <div>
                <div className='user-div'>
                    <img className='user-img' src={userImg} alt="" />
                    <div>
                        <h1>{name}</h1>
                        <p>{release}</p>
                    </div>
                    <p className='read-time'>{readTime} min read <a href=""><FontAwesomeIcon icon={faBookBookmark} /></a></p>
                </div>
                <h1 className='post-headline'>{post}</h1>
                <p>{hasTags}</p>
                <a href="/#" className='mark-read'>Mark as read</a>
            </div>
        </div>
    );
};

export default Post;