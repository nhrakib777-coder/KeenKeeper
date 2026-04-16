import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell } from "recharts";

function Stats() {

  const { interactions } = useContext(TimelineContext);

  const data = [
    { name: "Call", value: interactions.filter(t => t.type === "Call").length },
    { name: "Text", value: interactions.filter(t => t.type === "Text").length },
    { name: "Video", value: interactions.filter(t => t.type === "Video").length },
  ];

  return (
    <div className="max-w-5xl h-screen mx-auto mt-10">

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