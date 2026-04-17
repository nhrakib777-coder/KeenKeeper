import StatsCard from "./StatsCard";

function Banner({ friends }) {

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    friend => friend.status === "on-track"
  ).length;

  const needAttention = friends.filter(
    friend => friend.status === "overdue" || friend.status === "almost due"
  ).length;

  const interactions = 12;

  return (
    <div className="text-center py-10 md:py-12 px-4">

      <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#1F2937] font-bold leading-tight">
        Friends to keep close in your life
      </h1>

      <p className="text-sm md:text-base text-[#64748B] mt-4 max-w-2xl mx-auto leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>

      <button className="btn bg-[#244D3F] text-white px-5 mt-6 hover:scale-105 transition-all duration-300">
        + Add a Friend
      </button>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">

        <StatsCard
          title="Total Friends"
          value={totalFriends}
        />

        <StatsCard
          title="On Track"
          value={onTrack}
        />

        <StatsCard
          title="Need Attention"
          value={needAttention}
        />

        <StatsCard
          title="Interactions This Month"
          value={interactions}
        />

      </div>

    </div>
  );
}

export default Banner;