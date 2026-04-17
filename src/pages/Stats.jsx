import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import EmptyState from "../components/EmptyState";

function Stats() {
  const { interactions } = useContext(TimelineContext);

  if (interactions.length === 0) {
    return (
      <div className="max-w-5xl min-h-screen mx-auto mt-10 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
          Friendship Analytics
        </h1>

        <EmptyState
          title="No analytics yet"
          message="Add interactions to see friendship insights."
        />
      </div>
    );
  }

  const data = [
    { name: "Call", value: interactions.filter(t => t.type === "Call").length },
    { name: "Text", value: interactions.filter(t => t.type === "Text").length },
    { name: "Video", value: interactions.filter(t => t.type === "Video").length },
  ];

  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="max-w-5xl min-h-screen mx-auto mt-10 px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
        Friendship Analytics
      </h1>

      <div className="flex flex-col items-center justify-center bg-base-100 max-w-3xl mx-auto rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-all duration-300">

        {/* Pie Chart */}
        <div
          className="w-full flex justify-center outline-none focus:outline-none"
        >
          <PieChart
            width={320}
            height={320}
            style={{ outline: "none" }}
          >
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={5}
              cornerRadius={10}
              stroke="none"
              label={({ value }) => {
                const percent = ((value / total) * 100).toFixed(0);
                return `${percent}%`;
              }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                  stroke="none"
                />
              ))}
            </Pie>

            {/* Optional tooltip with % */}
            <Tooltip
              formatter={(value, name) => {
                const percent = ((value / total) * 100).toFixed(0);
                return [`${value} (${percent}%)`, name];
              }}
            />
          </PieChart>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full mt-6">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#244D3F]" />
            <p className="text-[#64748B] text-sm md:text-base">Call</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#7E35E1]" />
            <p className="text-[#64748B] text-sm md:text-base">Text</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#37A163]" />
            <p className="text-[#64748B] text-sm md:text-base">Video</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Stats;