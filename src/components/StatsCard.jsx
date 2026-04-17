function StatsCard({ title, value }) {

  return (
    <div className="card bg-base-100 shadow text-center p-4 md:p-6 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 rounded-lg">

      <h3 className="text-xl md:text-2xl font-bold text-[#244D3F]">
        {value}
      </h3>

      <p className="text-sm md:text-base text-gray-500 mt-1">
        {title}
      </p>

    </div>
  );
}

export default StatsCard;