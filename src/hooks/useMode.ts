import { useState } from "react";

type Mode = "question" | "answer";

export const useMode = () => {
  const [mode, setMode] = useState<Mode>("question");

  const changeMode = (nextMode?: Mode) => {
    if (nextMode) {
      setMode(mode);
      return;
    }

    switch (mode) {
      case "question":
        setMode("answer");
        return;
      case "answer":
        setMode("question");
        return;
      // ケースとしては起こり得ない
      default:
        return;
    }
  };

  return {
    mode,
    changeMode,
  };
};
