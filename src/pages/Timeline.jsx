import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import TimelineItem from "../components/TimelineItem";

function Timeline() {

  const { timeline } = useContext(TimelineContext);

  return (
    <div>

      <h1 className="text-3xl mb-6">
        Timeline
      </h1>

      {timeline.map(item => (
        <TimelineItem
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}

export default Timeline;