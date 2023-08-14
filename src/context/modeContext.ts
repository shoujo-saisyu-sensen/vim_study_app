import { createContext } from "react";
import { UseModeMethods } from "@/hooks/useMode";

// TODO いい感じにしたい
// 初期値対応のためundefined any
export const ModeContext = createContext<UseModeMethods>(undefined as any);
