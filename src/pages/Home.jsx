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
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">

      <Banner friends={friends} />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Your Friends
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

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