import { IArtsState } from "@/components/Articles/types";
import { IArticle } from "@/interfaces";
import { ChangeEvent } from "react";

export type SetOrderType = <F, S>(
  label: string,
  firstValue: F,
  secondValue: S
) => string;

export interface IFilterBarProps {
  initArts: IArticle[];
  arts: IArtsState;
  setArts: (a: IArtsState) => void;
}

export type IconProps = {
  fill: string;
  direction: string;
  size: "s" | "m";
};

export type SizesType = Record<
  string,
  { width: string; height: string; viewBox: string }
>;

// --------------- Search:

export type Inputs = "searchByHash";

export type EventInput = ChangeEvent<HTMLInputElement>;

export type InputHandlerArgs = { label: string; e: EventInput };

export type InputHandler = ({ label, e }: InputHandlerArgs) => void;

export type SearchInputProps = {
  label?: Inputs;
  value: string;
  inputHandler?: InputHandler;
  placeholder?: string;
  disabled: boolean;
};
