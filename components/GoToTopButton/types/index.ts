export interface IArrowIcon {
  direction: string;
  size: "s" | "m" | "l";
  width: string;
  height: string;
}

export type SizesType = Record<
  string,
  { width: string; height: string; viewBox: string }
>;
