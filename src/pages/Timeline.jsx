import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { MdCall, MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import EmptyState from "../components/EmptyState";

function Timeline() {

  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("all");

  const { interactions, clearInteractions } = useContext(TimelineContext);

  const getIcon = (type) => {
    if (type === "Call") return <MdCall className="text-xl" />;
    if (type === "Text") return <MdMessage className="text-xl" />;
    if (type === "Video") return <FaVideo className="text-xl" />;
  };

  const filteredTimeline =
    filter === "All"
      ? interactions
      : interactions.filter((item) => item.type === filter);

  let sortedTimeline = [...filteredTimeline];

  if (sortOrder === "newest") {
    sortedTimeline.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (sortOrder === "oldest") {
    sortedTimeline.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  // Empty State
  if (interactions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-4 md:p-6 text-center">

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Timeline
        </h1>

        <EmptyState
          title="No interactions yet"
          message="Start by adding your first call, text, or video."
        />

      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl text-[#1f2937] font-bold mb-6 md:mb-4">
        Timeline
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          <select
            className="select text-[#64748b] w-full sm:w-[160px] md:w-[180px] p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#244D3F] transition"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>

          <select
            className="select text-[#64748b] w-full sm:w-[160px] md:w-[180px] p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#244D3F] transition"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="all">All</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

        </div>

        {/* Button */}
        <button
          onClick={() => clearInteractions()}
          className="btn bg-red-400 hover:bg-red-500 hover:scale-105 transition-all duration-200 text-white px-4 py-2 w-full md:w-auto"
        >
          Reset History
        </button>

      </div>

      {/* Timeline List */}
      <div className="space-y-3">

        {sortedTimeline.map((item) => (

          <div
            key={item.id}
            className="flex items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200"
          >

            {/* Icon */}
            <div className="text-gray-700 mt-1 md:mt-0">
              {getIcon(item.type)}
            </div>

            {/* Text */}
            <div className="flex-1">

              <p className="font-semibold text-sm md:text-base">
                {item.type}{" "}
                <span className="text-gray-600 font-normal">
                  with {item.friendName}
                </span>
              </p>

              <p className="text-xs md:text-sm text-gray-500">
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