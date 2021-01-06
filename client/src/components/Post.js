import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import '../styles/Post.css';

const Post = (props) => {
    const postId = props.match.params.id;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((r) => r.json())
            .then((r) => {
                setPosts(r.posts);
            });
    }, [])

    return (
        <>
            <div>
                <Link to='/blog'>{`<< Powrót do bloga`}</Link>
            </div>
            <div className='post-container'>
                {posts.map(post => {
                    if (post._id === postId) {
                        const vid = () => {
                            if (true) {
                                return (
                                    <h4>Relacja wideo:</h4>
                                )
                            }
                        }
                        return (
                            <div className='post'>
                                <div className='post-image-container'>
                                    <img className='post-image' src={post.imagePost} alt="pies" />
                                </div>
                                <div>{post.title}</div>
                                <div>{post.content}</div>
                                {post.movie ?
                                    <>
                                        <h4>Relacja wideo:</h4>
                                        <div className="post-video">
                                            <ReactPlayer url={post.movie} />
                                        </div>
                                    </>
                                    : null}
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Post;