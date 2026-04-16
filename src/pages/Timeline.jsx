import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

function Timeline() {

  const { interactions } = useContext(TimelineContext);

  return (
    <div className="max-w-4xl h-screen mx-auto mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Interaction Timeline
      </h2>

      {interactions.map((item) => (
        <div key={item.id} className="card bg-base-100 shadow p-4 mb-4">
          <p>
            {item.type} with <b>{item.friendName}</b>
          </p>
          <p className="text-sm text-gray-500">
            {item.date}
          </p>
        </div>
      ))}

    </div>
  );
}

export default Timeline;