import { IconProps, SizesType } from "../types";

const SearchIcon = ({ fill, size }: Omit<IconProps, "direction">) => {
  const wrapStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
  };

  const sizes: SizesType = {
    s: {
      width: "18",
      height: "18",
      viewBox: "0 0 32 32",
    },
    m: {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
    },
  };

  return (
    <span style={wrapStyle}>
      <svg
        width={sizes[size].width}
        height={sizes[size].height}
        viewBox={sizes[size].viewBox}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31.715 28.953c.381.381.381.999 0 1.381l-1.381 1.381c-.382.381-1 .381-1.381 0l-9.668-9.668c-.105-.105-.175-.229-.222-.361C17.08 23.135 14.645 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 2.645-.865 5.08-2.314 7.063.132.047.256.116.361.222l9.668 9.668zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
      </svg>
    </span>
  );
};

export default SearchIcon;
