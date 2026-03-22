const achievementsData = [
  {
    id: 1,
    icon: "🎓",
    value: "8.61",
    label: "Current CGPA",
  },
  {
    id: 2,
    icon: "📜",
    value: "3",
    label: "Certificates",
  },
  {
    id: 3,
    icon: "💡",
    value: "2",
    label: "Projects Built",
  },
  {
    id: 4,
    icon: "🥇",
    value: "Gold Medal",    
    label: "Semester 6 Topper",
    gold: true,
    badge: "★ Honours",
  },
];

const AchievementCard = ({ item }) => {
  const isGold = item.gold;

  return (
    <div
      className={`relative rounded-lg p-6 text-center transition-all duration-300
      bg-[#161d27]
      ${
        isGold
          ? "border border-yellow-500/20 hover:border-yellow-400/40 hover:shadow-[0_0_20px_rgba(245,197,24,0.08)]"
          : "border border-[#1e2d3d] hover:border-teal-500/30 hover:shadow-[0_0_20px_rgba(0,200,180,0.06)]"
      }`}
    >
      {/* Badge */}
      {isGold && (
        <span className="absolute top-2.5 right-2.5 text-[9px] font-semibold tracking-widest uppercase text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded">
          {item.badge}
        </span>
      )}

      {/* Icon */}
      <span className="text-3xl block mb-3">{item.icon}</span>

      {/* Value */}
      <span
        className={`block text-2xl font-bold leading-none mb-2 ${
          isGold ? "text-yellow-400" : "text-teal-400"
        }`}
      >
        {item.value}
      </span>

      {/* Label */}
      <span className="text-[10px] text-slate-500 uppercase tracking-widest">
        {item.label}
      </span>
    </div>
  );
};

const AchievementCards = () => {
  return (
    <section id="achievements" className="bg-background px-6 pb-20">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievementsData.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default AchievementCards;
