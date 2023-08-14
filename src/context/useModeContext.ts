import { useContext } from "react";

import { ModeContext } from "@/context/modeContext";

// useContextの共有化
export const useModeContext = () => useContext(ModeContext);
