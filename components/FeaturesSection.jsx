"use client"

export default function FeaturesSection() {
  const features = [
    {
      image: "/fs1.png",
      title: "FRESH INGREDIENTS",
      text: "Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.",
    },
    {
      image: "/fs2.png",
      title: "HEALTHY MEALS",
      text: "Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.",
    },
    {
      image: "/fs3.png",
      title: "MEDITERRANEAN TASTE",
      text: "Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.",
    },
    {
      image: "/fs4.png",
      title: "EATING WELL",
      text: "Bringing the warmth of a mother’s kitchen to your table, one delicious meal at a time.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-8 md:px-0">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-24 w-24 object-contain mb-4"
            />
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
