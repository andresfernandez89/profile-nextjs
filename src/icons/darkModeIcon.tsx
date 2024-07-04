import { SVGProps } from "react";

export default function DarkModeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <g stroke-dasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g
        fill="none"
        stroke="currentColor"
        stroke-dasharray="4"
        stroke-dashoffset="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
          <animate
            id="IconifyId1907df11e421017024"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s;IconifyId1907df11e421017024.begin+6s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017024.begin+2s;IconifyId1907df11e421017024.begin+4s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017024.begin+1.2s;IconifyId1907df11e421017024.begin+3.2s;IconifyId1907df11e421017024.begin+5.2s"
            dur="0.4s"
            values="0;4"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017024.begin+1.8s"
            to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017024.begin+3.8s"
            to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017024.begin+5.8s"
            to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
          />
        </path>
        <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
          <animate
            id="IconifyId1907df11e421017025"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s;IconifyId1907df11e421017025.begin+6s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017025.begin+2s;IconifyId1907df11e421017025.begin+4s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017025.begin+1.2s;IconifyId1907df11e421017025.begin+3.2s;IconifyId1907df11e421017025.begin+5.2s"
            dur="0.4s"
            values="0;4"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017025.begin+1.8s"
            to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017025.begin+3.8s"
            to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017025.begin+5.8s"
            to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
          />
        </path>
        <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
          <animate
            id="IconifyId1907df11e421017026"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="2.8s;IconifyId1907df11e421017026.begin+6s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017026.begin+2s"
            dur="0.4s"
            values="4;0"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="IconifyId1907df11e421017026.begin+1.2s;IconifyId1907df11e421017026.begin+3.2s"
            dur="0.4s"
            values="0;4"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017026.begin+1.8s"
            to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
          />
          <set
            attributeName="d"
            begin="IconifyId1907df11e421017026.begin+5.8s"
            to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
          />
        </path>
      </g>
      <mask id="IconifyId1907df11e421017027">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#IconifyId1907df11e421017027)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  );
}
