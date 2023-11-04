import filterCfg from "../config";
import { SetOrderType } from "../types";

const { labels, orders } = filterCfg;
const date = labels.date;
const views = labels.views;
const up = orders.up;
const down = orders.down;

export const setOrder: SetOrderType = (label, firstValue, secondValue) => {
  if (label === date) {
    const firstDate: Date = new Date(firstValue as string);
    const lastDate: Date = new Date(secondValue as string);
    return firstDate > lastDate ? down : up;
  }

  if (label === views) {
    return Number(firstValue) < Number(secondValue) ? down : up;
  }

  return "";
};
