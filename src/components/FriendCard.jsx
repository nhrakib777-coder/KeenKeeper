import { Link } from "react-router-dom";

function FriendCard({ friend }) {

  const statusColor = {
    overdue: "bg-[#EF4444] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    "on-track": "bg-[#244D3F] text-white"
  };

  return (
   <Link to={`/friend/${friend.id}`}>

      <div className="card bg-base-100 min-h-[280px] flex flex-col items-center justify-center shadow p-5 text-center">

        <img
          src={friend.picture}
          className="w-[80px] h-[80px] rounded-full mx-auto"
        />

        <h2 className="font-semibold text-[1.25rem] text-[#1F2937] mt-2">
          {friend.name}
        </h2>

        <p className="text-[0.75rem] text-[#64748B]">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-2 flex-wrap">

          {friend.tags.map((tag, index) => (
            <span key={index} className="badge capitalize bg-[#CBFADB] text-[0.75rem] text-[#244D3F] font-medium ">
              {tag}
            </span>
          ))}

        </div>

        <div className="mt-3">

          <span className={`badge capitalize p-4 rounded-full ${statusColor[friend.status]}`}>
            {friend.status}
          </span>

        </div>

      </div>

    </Link>
  );
}

export default FriendCard;