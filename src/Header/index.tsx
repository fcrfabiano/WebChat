import chatGPT from "../assets/openai-avatar.png";
import { getTime } from "../utils/getTime";

export function Header() {
  return (
    <div className="header">
      <div className="user-info">
        <div className="user-status">
          <img src={chatGPT} alt="Jessie Pinkman" />
          <div className="user-status-wrapper">
            <strong>ChatGPT</strong>
            <span>Online</span>
          </div>
        </div>
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2_110)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.41142 4.38022C5.12666 4.09547 4.66498 4.09547 4.38022 4.38022C4.09547 4.66498 4.09547 5.12666 4.38022 5.41142L8.96879 9.99999L4.38022 14.5886C4.09547 14.8733 4.09547 15.335 4.38022 15.6198C4.66498 15.9045 5.12666 15.9045 5.41142 15.6198L9.99999 11.0312L14.5886 15.6198C14.8733 15.9045 15.335 15.9045 15.6198 15.6198C15.9045 15.335 15.9045 14.8733 15.6198 14.5886L11.0312 9.99999L15.6198 5.41142C15.9045 5.12666 15.9045 4.66498 15.6198 4.38022C15.335 4.09547 14.8733 4.09547 14.5886 4.38022L9.99999 8.96879L5.41142 4.38022Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2_110"
              x="-4"
              y="0"
              width="28"
              height="28"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_110"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_110"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="user-last-seen">
        <span>Hoje {getTime()}</span>
      </div>
    </div>
  );
}
