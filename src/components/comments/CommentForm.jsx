import React, { useState } from 'react';

const CommentForm = ({ postId, onCommentAdded }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.trim() === '') return;

        const newComment = {
            post_id: postId,
            user_id: 1, 
            content: comment,
            created_on: new Date().toISOString(),
        };

        const response = await fetch(`http://localhost:8088/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });

        if (response.ok) {
            setComment('');
            if (onCommentAdded) {
                onCommentAdded();
            }
        } else {
            console.error('Failed to add comment');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                required
                style={{ width: '100%', minHeight: '100px', padding: '10px', boxSizing: 'border-box' }}
            />
            <button type="submit" style={{ padding: '10px 20px', marginTop: '10px', display: 'block' }}>
                Submit Comment
            </button>
        </form>
    );
};

export default CommentForm;
