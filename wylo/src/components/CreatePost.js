import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import './CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!title || !content || !category) {
      setError('Please enter title, content, and category.');
      return;
    }

    dispatch(addPost({ id: Date.now(), title, content, category }));
    setTitle('');
    setContent('');
    setCategory('');
    setSuccess(true);
  };

  return (
    <div>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">None</option>
            <option value="Tech">Tech</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Post created successfully!</p>}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
