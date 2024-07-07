import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { setPosts } from '../redux/actions';
import './PostsDisplay.css'; // Import the CSS file

const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://run.mocky.io/v3/1e3181c5-97a7-4bd6-bd44-48adb0fea584')
      .then((response) => response.json())
      .then((data) => {
        console.log('fetch', data.articles);
        const posts = data.articles.slice(0, 10); // Limit to 10 posts for demonstration
        dispatch(setPosts(posts));
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(
      category ? posts.filter((post) => post.category === category) : posts
    );
  }, [posts, category]);

  return (
    <div className="posts-display">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>
      {filteredPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsDisplay;
