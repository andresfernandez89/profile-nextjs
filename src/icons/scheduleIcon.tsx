import { SVGProps } from "react";

export default function ScheduleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" strokeLinecap="round" strokeWidth="4">
        <rect
          width="40"
          height="30"
          x="4"
          y="10"
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          rx="2"
        />
        <path stroke="#000" d="M14 6V14" />
        <path stroke="#fff" d="M25 23L14 23" />
        <path stroke="#fff" d="M34 31L14 31" />
        <path stroke="#000" d="M34 6V14" />
      </g>
    </svg>
  );
}
