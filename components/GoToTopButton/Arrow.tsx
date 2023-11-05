import { IArrowIcon, SizesType } from "./types";

const ArrowIcon = ({ direction, size, width, height }: IArrowIcon) => {
  const wrapStyle = {
    // backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width,
    height,
  };

  const sizes: SizesType = {
    l: {
      width: "20",
      height: "20",
      viewBox: "0 0 22 14",
    },
  };

  return (
    <div style={wrapStyle}>
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
          id={"go_to_top"}
          // stroke={fill}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
