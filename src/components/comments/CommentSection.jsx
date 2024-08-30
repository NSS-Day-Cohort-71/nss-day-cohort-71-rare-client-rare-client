import React, { useState, useEffect } from 'react';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8088/comments?post_id=${postId}`)
            .then(res => res.json())
            .then(setComments);
    }, [postId]);

    return (
        <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.username}</strong>: {comment.content} (Posted on {new Date(comment.created_on).toLocaleString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentSection;
