type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

function Dot({
  w = 12,
  h = 12,
  color = "#fff",
  border = "#fff",
  borderWidth = 0,
}: {
  w?: number;
  h?: number;
  color?: Color;
  border?: Color;
  borderWidth?: number;
}) {
  return (
    <svg
      width={`${w}`}
      height={`${h}`}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={`${w / 2}`}
        cy={`${h / 2}`}
        r={`${w / 2 - borderWidth / 2}`}
        fill={color}
        stroke={border}
        strokeWidth={borderWidth}
      />
    </svg>
  );
}

export default Dot;
