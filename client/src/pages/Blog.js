import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then((r) => r.json())
            .then((r) => {
                setPosts(r.posts)
            });
    }, [])

    return (
        <>
            <div className="blog-title">
                Blog
            </div>
            <div className="blog">
                <ul className="posts-list">
                    {posts.map((post) => (
                        <li className="list-container" key={post._id}>
                            <div className="post-list-image-container">
                                <img className="post-list-image" src={post.imagePost} alt="piesek" />
                            </div>
                            <div>
                                <span className="list-post-title">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/post/' + post._id}>
                                        {post.title}
                                    </Link>
                                </span>
                                <span className="post-content">
                                    {post.content}
                                </span>
                                <Link to={'/post/' + post._id}>
                                    <button className="more">Więcej ...</button>
                                </Link>
                            </div>

                        </li>
                    ))}
                </ul>
                <aside className="blog-aside">
                    <div>Lista:</div>
                    <ul>
                        {posts.map(post =>
                            <li>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/post/' + post._id}>
                                    {post.title}
                                </Link>
                            </li>)}
                    </ul>
                </aside>
            </div>
        </>
    )
}

export default Blog;