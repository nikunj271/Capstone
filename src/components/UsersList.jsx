import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-4">Users</h2>
      <ul className="list-disc pl-5">
        {users.map(u => (
          <li key={u._id}>
            <Link to={`/users/${u._id}`}>{u.email}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}