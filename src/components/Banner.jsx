import StatsCard from "./StatsCard";

function Banner({ friends }) {

  const totalFriends = friends.length;

  const onTrack = friends.filter(
    friend => friend.status === "on-track"
  ).length;

  const needAttention = friends.filter(
    friend => friend.status === "overdue" || friend.status === "almost due"
  ).length;

  // fake interaction counter example
  const interactions = 12;

  return (
    <div className="text-center py-12">

      <h1 className="text-[3rem] text-[#1F2937] font-bold ">
Friends to keep close in your life      </h1>

      <p className="text-[#64748B] mt-3 ">
       Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.
      </p>

      <button className="btn bg-[#244D3F] text-white px-4 mt-6">
        + Add a Friend
      </button>

      {/* Stats cards */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

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