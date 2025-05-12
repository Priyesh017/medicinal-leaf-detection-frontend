import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <header className="p-6 border-b border-gray-900 backdrop-blur-sm bg-gray-950 bg-opacity-80 z-10 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <Leaf className="h-8 w-8 text-green-500 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-green-500 rounded-full filter blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>

          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              LeafMD
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-green-400 text-white transition-colors duration-300 relative"
          >
            Home
          </Link>
          <a
            href="/about"
            className="hover:text-green-400 text-white transition-colors duration-300 relative"
          >
            About
          </a>
          <Link
            to="/documentation"
            className="hover:text-green-400 text-white transition-colors duration-300 relative"
          >
            Documentation
          </Link>
          {/* <a
            href="#"
            className="hover:text-green-400 text-white transition-colors duration-300 relative"
          >
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
}
