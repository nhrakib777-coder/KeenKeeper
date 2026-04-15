function StatsCard({ title, value }) {

  return (
    <div className="card bg-base-100 shadow text-center p-6">

      <h3 className="text-2xl font-bold">
        {value}
      </h3>

      <p className="text-gray-500">
        {title}
      </p>

    </div>
  );
}

export default StatsCard;