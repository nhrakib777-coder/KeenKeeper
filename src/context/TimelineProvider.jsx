import { useState } from "react";
import { TimelineContext } from "./TimelineContext";

function TimelineProvider({ children }) {

  const [interactions, setInteractions] = useState([]);

  const addInteraction = (interaction) => {
    setInteractions((prev) => [...prev, interaction]);
  };

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineProvider;