import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

function Stats() {

  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Call", value: timeline.filter(t => t.type === "Call").length },
    { name: "Text", value: timeline.filter(t => t.type === "Text").length },
    { name: "Video", value: timeline.filter(t => t.type === "Video").length },
  ];

  return (
    <div>

      <h1 className="text-3xl mb-6">
        Friendship Analytics
      </h1>

      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" outerRadius={150} label>

          {data.map((entry, index) => (
            <Cell key={index} />
          ))}

        </Pie>
      </PieChart>

    </div>
  );
}

export default Stats;