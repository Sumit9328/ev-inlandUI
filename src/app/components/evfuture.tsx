// pages/ev-future.js
export default function EvFuture() {
  const cards = [
    {
      title: "Environmental Benefits",
      description:
        "EVs are eco-friendly, producing zero tailpipe emissions, reducing carbon footprints, and combating climate change.",
      icon: "🌿",
      bg: "bg-[#28ad18]",
    },
    {
      title: "Energy Efficiency",
      description:
        "EVs are highly energy-efficient, converting a larger portion of their energy into driving power compared to internal combustion engines.",
      icon: "⚡",
      bg: "bg-[#4189c2]",
    },
    {
      title: "Cost Savings",
      description:
        "Over time, EVs offer significant cost savings through lower fuel and maintenance expenses, making them financially attractive.",
      icon: "₹",
      bg: "bg-[#bd2330]",
    },
    {
      title: "Technological Advancements",
      description:
        "Rapid advancements in battery technology and charging infrastructure are making EVs more accessible and practical.",
      icon: "🔧",
      bg: "bg-[#28ad18]",
    },
    {
      title: "Government Initiatives",
      description:
        "Governments worldwide are incentivizing EV adoption through subsidies, tax credits, and emissions regulations.",
      icon: "🏛️",
      bg: "bg-[#4189c2]",
    },
    {
      title: "Market Demand",
      description:
        "Growing consumer awareness and demand for cleaner transportation are driving the electric vehicle market expansion.",
      icon: "📈",
      bg: "bg-[#bd2330]",
    },
    {
      title: "Global Trend",
      description:
        "EVs are a global trend, and automakers are investing heavily in electric vehicle development, signaling the industry’s direction.",
      icon: "🌍",
      bg: "bg-[#28ad18]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-white p-6">
      <h1 className="text-4xl font-bold text-center text-[#28ad18] mb-12">
        Why Electric Vehicles (EVs) Are the Future
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="text-center bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full text-white text-3xl ${card.bg}`}
            >
              {card.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2 text-[#28ad18]">
              {card.title}
            </h2>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
