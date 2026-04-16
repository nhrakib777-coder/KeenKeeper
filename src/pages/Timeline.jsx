import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { MdCall, MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

function Timeline() {

  const { interactions } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    if (type === "Call") return <MdCall className="text-xl" />;
    if (type === "Text") return <MdMessage className="text-xl" />;
    if (type === "Video") return <FaVideo className="text-xl" />;
  };

  const filteredTimeline =
    filter === "All"
      ? interactions
      : interactions.filter((item) => item.type === filter);

  return (
    <div className="max-w-3xl mx-auto p-6">

      {/* Title */}
      <h1 className="text-3xl text-[#1f2937] font-bold mb-4">Timeline</h1>

      {/* Dropdown Filter */}
      <select
        className="select select-bordered text-[#64748b] p-2 mb-6 w-52"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Timeline List */}
      <div className="space-y-3">

        {[...filteredTimeline].reverse().map((item) => (

          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow"
          > 

            {/* Icon */}
            <div className="text-gray-700">
              {getIcon(item.type)}
            </div>

            {/* Text */}
            <div>

              <p className="font-semibold">
                {item.type} <span className="text-gray-600">with {item.friendName}</span>
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Timeline;