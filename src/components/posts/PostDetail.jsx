import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from '../comments/CommentSection';
import CommentForm from '../comments/CommentForm';
import { getPostById } from '../../services/postService';

export const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const postData = await getPostById(postId);
      setPost(postData);
    };
    loadPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3>Comments</h3>
      <CommentSection postId={postId} />

      <h3>Add a Comment</h3>
      <CommentForm postId={postId} />
    </div>
  );
};

export default PostDetail;
