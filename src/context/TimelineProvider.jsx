import { useState, useEffect } from "react";
import { TimelineContext } from "./TimelineContext";

function TimelineProvider({ children }) {

  const [interactions, setInteractions] = useState(() => {
    const saved = localStorage.getItem("timeline");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("timeline", JSON.stringify(interactions));
  }, [interactions]);

  const addInteraction = (interaction) => {
    setInteractions((prev) => [...prev, interaction]);
  };

  const clearInteractions = () => {
    setInteractions([]);
    localStorage.removeItem("timeline");
  };

  return (
    <TimelineContext.Provider
      value={{
        interactions,
        addInteraction,
        clearInteractions
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineProvider;