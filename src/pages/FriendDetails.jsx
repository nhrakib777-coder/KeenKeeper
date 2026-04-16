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

    if (type === "Call") {
      toast(`📞 Call logged with ${friend.name}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }

    if (type === "Text") {
      toast(`💬 Text sent to ${friend.name}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }

    if (type === "Video") {
      toast(`📹 Video call with ${friend.name}`, {
        position: "top-center",
        autoClose: 3000,
      });
    }
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
    <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 p-8">
      {/* LEFT PROFILE CARD */}

      <div className="card  text-center">
        <div className="card bg-base-100 py-6 space-y-3">
          <img
            src={friend.picture}
            className="w-20 h-20 rounded-full mx-auto"
          />

          <h2 className="text-[1.25rem] font-bold text-[#1f2937] mt-2">
            {friend.name}
          </h2>

          <div className="mt-3">
            <span
              className={`badge capitalize p-4 rounded-full ${statusColor[friend.status]}`}>
              {friend.status}
            </span>
          </div>
          <div className="badge rounded-full  mx-auto mt-2">
            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="badge capitalize bg-[#CBFADB] text-[0.75rem] text-[#244D3F] font-medium ">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-3 italic">"{friend.bio}"</p>

          <p className="text-sm text-gray-400">Preferred:  {friend.email}</p>
        </div>

        <div className=" flex flex-col ">
          <button className="btn bg-base-100 text-[1rem] text-[#1f2937] text-medium mt-4"><RiNotificationSnoozeLine size={16} />
            Snooze 2 Weeks</button>

          <button className="btn bg-base-100 text-[1rem] text-[#1f2937] text-medium mt-2"><FiArchive size={16} />
            Archive</button>

          <button className="btn bg-base-100 text-[1rem] text-[#EF4444] text-medium mt-2"><RiDeleteBinLine size={16} />
            Delete</button>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="md:col-span-2 space-y-8">
        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-[1.875rem] text-[#244D3F] font-bold">{friend.days_since_contact}</h2>
            <p className="text-[#64748B]">Days Since Contact</p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-[1.875rem]  text-[#244D3F] font-bold">{friend.goal}</h2>
            <p className="text-[#64748B]">Goal (Days)</p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h2 className="text-[1.25rem] lg:text-[1.875rem] text-[#244D3F] font-bold">{friend.next_due_date}</h2>
            <p className="text-[#64748B]">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}

        <div className="card bg-base-100 shadow py-6 px-8">
          <div className="flex justify-between">
            <h3 className="font-semibold text-[1.25rem] text-[#244D3F]">Relationship Goal</h3>

            <button className="btn btn-sm bg-base-200 p-4">Edit</button>
          </div>

          <p className="text-[#64748B] text-[1.125rem] mt-2">
            Connect every <b className="text-[#244D3F]">{friend.goal} days</b>
          </p>
        </div>

        {/* Quick Check-In */}

        <div className="card bg-base-100 shadow p-6">
          <h3 className="font-semibold text-[1.25rem] text-[#244D3F] mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleInteraction('Call')}
              className="btn text-[1.125rem] text-[#1f2937] h-20 flex flex-col bg-base-200 shadow-md">
              <MdCall size={20} />
              Call
            </button>

            <button
              onClick={() => handleInteraction('Text')}
              className="btn h-20 flex flex-col bg-base-200 text-[1.125rem] text-[#1f2937] shadow-md">
              <MdMessage size={20} />
              Text
            </button>

            <button
              onClick={() => handleInteraction('Video')}
              className="btn h-20 text-[1.125rem] text-[#1f2937] bg-base-200 flex flex-col  shadow-md">
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
