import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdCall, MdMessage } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { TimelineContext } from '../context/TimelineContext';
import { toast } from 'react-toastify';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addInteraction } = useContext(TimelineContext);

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        const singleFriend = data.find((f) => f.id === parseInt(id));
        setFriend(singleFriend);
      });
  }, [id]);

  const handleInteraction = (type) => {
    const interaction = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleString(),
    };

    addInteraction(interaction);

    const messages = {
      Call: `📞 Call logged with ${friend.name}`,
      Text: `💬 Text sent to ${friend.name}`,
      Video: `📹 Video call with ${friend.name}`,
    };

    toast(messages[type], {
      position: "top-center",
      autoClose: 3000,
    });
  };

  if (!friend) {
    return (
      <div className="text-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const statusColor = {
    overdue: 'bg-[#EF4444] text-white',
    'almost due': 'bg-[#EFAD44] text-white',
    'on-track': 'bg-[#244D3F] text-white',
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT PROFILE CARD */}
      <div className="text-center">

        <div className="card bg-base-100 py-6 space-y- shadow-md hover:shadow-lg transition-all duration-300">

          <img
            src={friend.picture}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover"
          />

          <h2 className="text-lg md:text-xl font-bold text-[#1f2937]">
            {friend.name}
          </h2>

          {/* Status */}
          <div className="mt-2">
            <span className={`badge capitalize p-3 md:p-4 rounded-full ${statusColor[friend.status]}`}>
              {friend.status}
            </span>
          </div>

          {/* Tags (FIXED RESPONSIVE WRAP) */}
          <div className="flex flex-wrap justify-center gap-2 px-2 mt-2">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="badge capitalize bg-[#CBFADB] text-xs md:text-sm text-[#244D3F] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-3 italic text-sm md:text-base px-2">
            "{friend.bio}"
          </p>

          <p className="text-xs md:text-sm text-gray-400 px-2">
            Preferred: {friend.email}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col space-y-6 mt-4">

          <button className="btn bg-base-100 text-[#1f2937] shadow-md hover:scale-105 transition py-6">
            <RiNotificationSnoozeLine size={16} />
            Snooze 2 Weeks
          </button>

          <button className="btn bg-base-100 text-[#1f2937] shadow-md hover:scale-105 transition py-6">
            <FiArchive size={16} />
            Archive
          </button>

          <button className="btn bg-base-100 text-[#EF4444] shadow-md hover:scale-105 transition py-6">
            <RiDeleteBinLine size={16} />
            Delete
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-2 space-y-6 md:space-y-10  lg:space-y-9">

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="card bg-base-100 shadow p-4 md:p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl md:text-3xl text-[#244D3F] font-bold">
              {friend.days_since_contact}
            </h2>
            <p className="text-[#64748B] text-sm md:text-base">Days Since Contact</p>
          </div>

          <div className="card bg-base-100 shadow p-4 md:p-6 text-center hover:shadow-lg transition">
            <h2 className="text-2xl md:text-3xl text-[#244D3F] font-bold">
              {friend.goal}
            </h2>
            <p className="text-[#64748B] text-sm md:text-base">Goal (Days)</p>
          </div>

          <div className="card bg-base-100 shadow p-4 md:p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-[#244D3F] font-bold break-words">
              {friend.next_due_date}
            </h2>
            <p className="text-[#64748B] text-sm md:text-base">Next Due</p>
          </div>

        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="card bg-base-100 shadow py-5 md:py-6 px-5 md:px-8 hover:shadow-md transition">

          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg md:text-xl text-[#244D3F]">
              Relationship Goal
            </h3>

            <button className="btn btn-sm bg-base-200 hover:scale-105 transition">
              Edit
            </button>
          </div>

          <p className="text-[#64748B] text-sm md:text-lg mt-2">
            Connect every <b className="text-[#244D3F]">{friend.goal} days</b>
          </p>

        </div>

        {/* QUICK CHECK-IN */}
        <div className="card bg-base-100 shadow p-5 md:p-6">

          <h3 className="font-semibold text-lg md:text-xl text-[#244D3F] mb-4">
            Quick Check-In
          </h3>

          <div className="grid grid-cols-3 gap-3 md:gap-4">

            <button
              onClick={() => handleInteraction('Call')}
              className="btn h-20 md:h-24 flex flex-col bg-base-200 shadow-md hover:scale-105 transition"
            >
              <MdCall size={20} />
              Call
            </button>

            <button
              onClick={() => handleInteraction('Text')}
              className="btn h-20 md:h-24 flex flex-col bg-base-200 shadow-md hover:scale-105 transition"
            >
              <MdMessage size={20} />
              Text
            </button>

            <button
              onClick={() => handleInteraction('Video')}
              className="btn h-20 md:h-24 flex flex-col bg-base-200 shadow-md hover:scale-105 transition"
            >
              <FaVideo size={18} />
              Video
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default FriendDetails;