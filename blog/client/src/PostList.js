import React, {useState,useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';


export default () => {

    const [post , setPost] = useState({});
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts');
        setPost(res.data);
    };

    useEffect(() => {
        fetchPosts();
    } ,[]);

    
    const renderedPosts = Object.values(post).map(post => {
        return  <div className='card' style={{width:'30%', marginBottom : '20px'}}
        key={post.id}
        >
            <div className='card-body'>
                <h3>{post.title}</h3>
            </div>
            <CommentCreate postId={post.id}/>
            <CommentList postId={post.id}/>
        </div>
    });

    return (
       
        <div className='d-flex flex-row flew-wrap justify-content-beetween'>
            
            {renderedPosts}
        </div>
    );
};