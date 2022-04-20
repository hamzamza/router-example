import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Post() {
  console.log(useParams());
  console.log(useLocation());
  const query = new URLSearchParams(useLocation().search);
  return (
    <>
      <div>your post id is {useParams().id}</div>
      <h3>ID is {query.get('id')}</h3>
      <h3>NAME is {query.get('name')}</h3>
    </>
  );
}

export default Post;
