import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FacebookPagePosts = ({accessToken }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://graph.facebook.com/v14.0/santodomingo.tecnicoprofesional/posts`, {
          params: {
            access_token: accessToken,
            limit: 30,
          },
        });
        setPosts(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [pageId, accessToken]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Últimas publicaciones de la página</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.message || 'Sin mensaje'}</p>
            <p><strong>Creado el:</strong> {new Date(post.created_time).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacebookPagePosts;
