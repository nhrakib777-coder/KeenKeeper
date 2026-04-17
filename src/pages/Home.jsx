import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";

function Home() {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

      <Banner friends={friends} />

      <h2 className="text-lg md:text-xl font-semibold mt-8 mb-4 text-[#1f2937]">
        Your Friends
      </h2>

      {/* Responsive grid fix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">

        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            friend={friend}
          />
        ))}

      </div>

    </div>
  );
}

export default Home;