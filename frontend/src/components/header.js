import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-mint-500 text-cream-100 p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Menthecamomille</h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-mint-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-mint-700">About</Link></li>
          <li><Link to="/blog" className="hover:text-mint-700">Blog</Link></li>
          <li><Link to="/products" className="hover:text-mint-700">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
