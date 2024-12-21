import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-mint text-dark py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Menthecamomille</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
