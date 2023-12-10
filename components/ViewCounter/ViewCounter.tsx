import { IViewCounterProps } from "./types";
import s from "./ViewCounter.module.scss";
import EyeIcon from "./EyeIcon";

const ViewCounter = ({ views, left, bottom }: IViewCounterProps) => {
  const inlineStyle = { left, bottom };

  return (
    <span className={s.viewCounter} style={inlineStyle}>
      <EyeIcon />
      <span className={s.value}>{views}</span>
    </span>
  );
};

export default ViewCounter;
