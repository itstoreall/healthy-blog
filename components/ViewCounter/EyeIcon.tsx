import { colorWhite } from "@/theme";

const EyeIcon = () => {
  const width = 16;
  const height = 16;
  const viewBox = "0 0 32 32";

  const s = { width: "16px", height: "16px" };

  return (
    <div style={s}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={colorWhite}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 6C9.021 6 2.972 10.064 0 16c2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zm7.889 5.303A15.212 15.212 0 0 1 28.559 16a15.223 15.223 0 0 1-4.67 4.697C21.527 22.204 18.799 23 16 23s-5.527-.796-7.889-2.303A15.212 15.212 0 0 1 3.441 16a15.223 15.223 0 0 1 5.041-4.925 8 8 0 1 0 15.036 0c.124.074.248.15.371.228zM16 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    </div>
  );
};

export default EyeIcon;
