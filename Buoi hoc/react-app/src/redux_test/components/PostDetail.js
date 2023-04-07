import React from 'react';
import {useParams} from 'react-router-dom';

export default function PostDetail() {
  const params = useParams();
  console.log('bb params', params);
  return (
    <div>
      <h1>ĐÂY LÀ POST DETAIL</h1>
      <h2>id: {params.idpost} </h2>
      <h2>name: {params.name} </h2>
    </div>
  );
}
