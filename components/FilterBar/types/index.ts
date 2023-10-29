import { IArtsState } from "@/components/Articles/types";

export interface IFilterBarProps {
  arts: IArtsState;
  setArts: (a: IArtsState) => void;
}

export interface IArrowIcon {
  fill: string;
  direction: string;
  size: "s" | "m";
}

export type SizesType = Record<
  string,
  { width: string; height: string; viewBox: string }
>;
