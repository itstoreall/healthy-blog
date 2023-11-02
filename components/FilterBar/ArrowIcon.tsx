import { IArrowIcon, SizesType } from "./types";

const ArrowIcon = ({ fill, direction, size }: IArrowIcon) => {
  const wrapStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "12px",
    height: "12px",
  };

  const sizes: SizesType = {
    s: {
      width: "8",
      height: "8",
      viewBox: "0 0 22 14",
    },
    m: {
      width: "12",
      height: "8",
      viewBox: "0 0 22 13",
    },
  };

  return (
    <span style={wrapStyle}>
      <svg
        width={sizes[size].width}
        height={sizes[size].height}
        viewBox={sizes[size].viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={direction !== "up" ? { transform: "rotate(-180deg)" } : {}}
      >
        <path
          d="M20 11L11 2L2.14876 11"
          id="arrow"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default ArrowIcon;
