import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import toast from "react-hot-toast";

function FriendDetails() {

  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  const { addEntry } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data =>
        setFriend(data.find(f => f.id == id))
      );
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  const handleAction = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} logged`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="card shadow p-6">

        <img
          src={friend.picture}
          className="w-32 rounded-full"
        />

        <h2 className="text-xl font-bold">
          {friend.name}
        </h2>

        <p>{friend.bio}</p>

        <p>{friend.email}</p>

      </div>

      <div>

        <div className="flex gap-4">

          <button
            className="btn"
            onClick={() => handleAction("Call")}
          >
            Call
          </button>

          <button
            className="btn"
            onClick={() => handleAction("Text")}
          >
            Text
          </button>

          <button
            className="btn"
            onClick={() => handleAction("Video")}
          >
            Video
          </button>

        </div>

      </div>

    </div>
  );
}

export default FriendDetails;