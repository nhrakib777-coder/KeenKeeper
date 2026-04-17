import { Link } from "react-router-dom";

function FriendCard({ friend }) {

  const statusColor = {
    overdue: "bg-[#EF4444] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    "on-track": "bg-[#244D3F] text-white"
  };

  return (
    <Link to={`/friend/${friend.id}`}>

      <div className="card bg-base-100 min-h-[260px] sm:min-h-[280px] flex flex-col items-center justify-center shadow-md p-4 md:p-5 text-center rounded-xl hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer">

        <img
          src={friend.picture}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full mx-auto object-cover"
        />

        <h2 className="font-semibold text-lg md:text-[1.25rem] text-[#1F2937] mt-2">
          {friend.name}
        </h2>

        <p className="text-xs md:text-[0.75rem] text-[#64748B]">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap px-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="badge capitalize bg-[#CBFADB] text-xs md:text-[0.75rem] text-[#244D3F] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-3">
          <span
            className={`badge capitalize px-3 py-2 md:p-4 rounded-full text-xs md:text-sm ${statusColor[friend.status]}`}
          >
            {friend.status}
          </span>
        </div>

      </div>

    </Link>
  );
}

export default FriendCard;