interface IArrowIcon {
  fill: string;
  direction: string;
  size: "s" | "m";
}

type SizesType = Record<
  string,
  { width: string; height: string; viewBox: string }
>;

const ArrowIcon = ({ fill, direction, size }: IArrowIcon) => {
  const wrapStyle = {
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
          stroke={fill}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
