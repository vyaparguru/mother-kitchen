
"use client"
import { useEffect, useState } from "react";

export default function ReviewSection() {
  const reviews = [
    {
      text: "Review1.",
      author: "name",
    },
    {
      text: "Review2.",
      author: "name",
    },
    {
      text: "Review3.",
      author: "name",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section
      className="relative bg-fixed bg-center bg-cover h-[440px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/1.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white max-w-3xl px-6 transition-all duration-700 ease-in-out">
        <p className="text-lg md:text-xl font-medium mb-4">
          {reviews[current].text}
        </p>
        <h4 className="font-semibold">{reviews[current].author}</h4>
      </div>

      <div className="absolute bottom-6 flex justify-center space-x-2 z-10">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
