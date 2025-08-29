"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-36 py-4 z-20 shadow transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="flex-shrink-0">
        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      <nav className="hidden md:flex space-x-8 text-gray-800 font-medium mx-auto">
        <a href="#" className="hover:text-gray-900">Home</a>
        <a href="#" className="hover:text-gray-900">Menu</a>
        <a href="#" className="hover:text-gray-900">About</a>
        <a href="#" className="hover:text-gray-900">Contact</a>
      </nav>

      <button
        className="md:hidden text-gray-800 z-30"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white text-gray-900 shadow-lg flex flex-col items-center py-24 space-y-8 transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-gray-800"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
        </button>
        <a href="#" className="hover:text-gray-900 text-lg" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" className="hover:text-gray-900 text-lg" onClick={() => setIsOpen(false)}>Menu</a>
        <a href="#" className="hover:text-gray-900 text-lg" onClick={() => setIsOpen(false)}>About</a>
        <a href="#" className="hover:text-gray-900 text-lg" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}