"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const images = ["/1.jpeg", "/1.jpeg", "/1.jpeg"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-4">
        <p className="text-gray-900 uppercase tracking-widest text-sm md:text-md mb-4">
          Taste and Comfort
        </p>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-900 mb-6 ">
          Soft and Crunchy
        </h1>
        <p className="text-gray-900 max-w-2xl mb-8">
          Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.
        </p>
        <button className="bg-gray-900 text-white px-7 py-4 font-semibold shadow transition cursor-pointer">
          View Our Menu
        </button>
      </div>
    </div>
  )
}