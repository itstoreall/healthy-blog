import { IArtsState } from "@/components/Articles/types";
import { IArticle } from "@/interfaces";

export interface IFilterBarProps {
  initArts: IArticle[];
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
