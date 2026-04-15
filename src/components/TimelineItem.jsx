import { TimelineContext } from "../context/TimelineContext";
function TimelineItem({ item }) {
  return (
    <div className="border-l-4 border-primary pl-4 mb-4">

      <p className="font-bold">
        {item.title}
      </p>

      <p className="text-sm text-gray-500">
        {item.date}
      </p>

    </div>
  );
}

export default TimelineItem;