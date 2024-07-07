import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../redux/actions';
import './PostItem.css'; // Import the CSS file

const PostItem = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editPost({ ...post, title, content, category }));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="post-item">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }

  return (
    <div className="post-item">
      <h2><strong>Title: </strong>{post.title}</h2>
      <p><strong>Description: </strong>{post.content}</p>
      <p><strong>Category: </strong> {post.category}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default PostItem;
