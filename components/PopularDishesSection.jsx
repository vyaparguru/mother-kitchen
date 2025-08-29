"use client"

import { FaStar } from "react-icons/fa";

export default function PopularDishesSection() {
  const dishes = [
    {
      image: "/ps1.jpg",
      title: "Dish Name",
      price: 14,
      desc: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      rating: 5,
    },
    {
      image: "/ps2.jpg",
      title: "Dish Name",
      price: 9,
      desc: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      rating: 1,
    },
    {
      image: "/ps3.jpg",
      title: "Dish Name",
      price: 4,
      desc: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      rating: 4,
    },
    {
      image: "/ps1.jpg",
      title: "Dish Name",
      price: 11,
      desc: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-0 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">Most popular dishes</h2>
        {/* <p className="text-gray-500 mt-2 mb-10">
          Bringing the warmth of a mother’s kitchen to your table.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-gray-50 overflow-hidden shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-4 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-900 font-semibold text-sm">{dish.title}</h3>
                  <span className=" text-gray-900 px-2 py-1 text-sm font-semibold">
                    ${dish.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{dish.desc}</p>

                <div className="flex mt-3 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < dish.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
