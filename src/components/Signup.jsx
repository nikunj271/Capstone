import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const text = await res.text();
      let data = {};

      try {
        data = JSON.parse(text); // Safely try to parse JSON
      } catch {
        console.warn("No JSON body returned:", text); // Debug
      }  

      if (!res.ok) throw new Error(data.error || 'Signup failed');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm">
      <h2 className="text-xl mb-4">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-2">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border p-1 w-full"
        />
      </div>
      <div className="mb-2">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border p-1 w-full"
        />
      </div>
      <button type="submit" className="mt-2 p-2 border rounded">Sign Up</button>
    </form>
  );
}
