import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { MdCall, MdMessage } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import EmptyState from "../components/EmptyState";

function Timeline() {



  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("all");

  const getIcon = (type) => {
    if (type === "Call") return <MdCall className="text-xl" />;
    if (type === "Text") return <MdMessage className="text-xl" />;
    if (type === "Video") return <FaVideo className="text-xl" />;
  };
  const { interactions, clearInteractions } = useContext(TimelineContext);
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
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl text-[#1f2937] font-bold mb-4">
        Timeline
      </h1>
      {/* Title + Controls */}
      <div className="flex justify-between items-center mb-6">



        <div className="flex gap-3">

          {/* Filter */}
          <select
            className="select text-[#64748b] w-[180px] p-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>

          {/* Sort */}
          <select
            className="select text-[#64748b] w-[180px] p-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="all">All</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

        </div>
        <button
          onClick={() => {
            console.log("clicked");
            clearInteractions();
          }}
          className="btn bg-red-400 hover:bg-red-500 text-white p-4"
        >
          Reset History
        </button>
      </div>

      {/* Timeline List */}
      <div className="space-y-3">

        {sortedTimeline.map((item) => (

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