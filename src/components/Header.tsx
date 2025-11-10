import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>GeoCities 2.0</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/create">Create</a>
        <a href="/webrings">Web Rings</a>
      </nav>
    </header>
  );
};

export default Header;
