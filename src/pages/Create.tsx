import React, { useState } from 'react';
import './Create.css';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    alert(`Website created!\n\nTitle: ${title}\nURL: ${url}\nDescription: ${description}`);
    setTitle('');
    setUrl('');
    setDescription('');
  };

  return (
    <div className="create-container">
      <h2>Create Your Own Website!</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <label htmlFor="title">Website Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="url">Your GeoCities URL:</label>
        <div className="url-input">
          <span>/~/your-username/</span>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          required
        />
        <button type="submit">Create My Site!</button>
      </form>
    </div>
  );
};

export default Create;
