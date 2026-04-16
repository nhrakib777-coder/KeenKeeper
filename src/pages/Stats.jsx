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

  const COLORS = ["#244D3F", "#7E35E1", "#37A163"];

  return (
    <div className="max-w-5xl h-screen mx-auto mt-10 text-center">

      <h1 className="text-3xl font-bold mb-10">
        Friendship Analytics
      </h1>

      <div className="flex flex-col items-center justify-center bg-base-100 max-w-3xl mx-auto rounded-lg shadow-md p-6 ">

        <PieChart width={350}
          height={350}
          className="">
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}   
            outerRadius={120}  
            paddingAngle={5}
            cornerRadius={10}

          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="flex justify-between gap-4 w-3xl mx-auto ">
          <div className="flex justify-center items-center"> <span style={{ backgroundColor: COLORS[1], borderRadius: "50%" }} className="inline-block w-4 h-4 mr-2"></span> <p className="text-[#64748B]">Text</p></div>
          <div className="flex justify-center items-center"> <span style={{ backgroundColor: COLORS[0], borderRadius: "50%" }} className="inline-block w-4 h-4 mr-2"></span> <p className="text-[#64748B]">Call</p></div>
          <div className="flex justify-center items-center"><span style={{ backgroundColor: COLORS[2], borderRadius: "50%" }} className="inline-block w-4 h-4 mr-2"></span> <p className="text-[#64748B]">Video</p></div>
        </div>
      </div>

    </div>
  );
}

export default Stats;