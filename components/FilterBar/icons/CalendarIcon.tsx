import { IconProps, SizesType } from "../types";

const CalendarIcon = ({ fill, size }: Omit<IconProps, "direction">) => {
  const wrapStyle = {
    width: "24px",
    height: "24px",
  };

  const sizes: SizesType = {
    m: {
      width: "24",
      height: "24",
      viewBox: "-2 0 33 32",
    },
  };

  return (
    <span style={wrapStyle}>
      <svg
        width={sizes[size].width}
        height={sizes[size].height}
        viewBox={sizes[size].viewBox}
        // fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM4 24h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zm-6-6h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM4 18h4v4H4zM26 0v2h-4V0H8v2H4V0H0v32h30V0h-4zm2 30H2V8h26v22z" />
      </svg>
    </span>
  );
};

export default CalendarIcon;
