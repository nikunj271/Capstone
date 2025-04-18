import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(setUser)
      .catch(console.error);
  }, [id]);

  const handleDelete = async () => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    navigate('/');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl mb-2">{user.email}</h2>
      <p>Password: {user.password}</p>
      <div className="mt-4">
        <Link to={`/users/${id}/edit`} className="mr-2 p-1 border rounded">Edit</Link>
        <button onClick={handleDelete} className="p-1 border rounded text-red-600">Delete</button>
      </div>
    </div>
  );
}