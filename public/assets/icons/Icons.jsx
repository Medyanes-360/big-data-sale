export default class Icons {
  static ArrowRight({ className, color = "#FFFFFF" }) {
    // Default beyaz
    return (
      <svg
        className={className}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.88647 16.3398H26.301"
          stroke={color} // Renk prop'tan gelir
          strokeWidth="1.94678"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5405 7.57935L26.301 16.3398L17.5405 25.1003"
          stroke={color} // Renk prop'tan gelir
          strokeWidth="1.94678"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  static CheckSuccess({ className }) {
    return (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.285725"
          y="0.162598"
          width="15.2381"
          height="15.2381"
          rx="7.61905"
          fill="#5AC519"
        />
        <path
          d="M11.8333 5.28186L6.83334 10.2816L4.33334 7.78186"
          stroke="white"
          strokeWidth="0.952381"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static CheckError({ className }) {
    return (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.285725"
          y="0.162598"
          width="15.2381"
          height="15.2381"
          rx="7.61905"
          fill="#FF5A30"
        />
        <path
          d="M11.1191 4.56738L4.69049 10.996"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1191 10.996L4.69049 4.56738"
          stroke="white"
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static Facebook({ className }) {
    return (
      <svg
        width="14"
        height="23"
        viewBox="0 0 14 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 1.02197H9.5C8.17392 1.02197 6.90215 1.54876 5.96447 2.48644C5.02678 3.42412 4.5 4.69589 4.5 6.02197V9.02197H1.5V13.022H4.5V21.022H8.5V13.022H11.5L12.5 9.02197H8.5V6.02197C8.5 5.75676 8.60536 5.5024 8.79289 5.31487C8.98043 5.12733 9.23478 5.02197 9.5 5.02197H12.5V1.02197Z"
          stroke="#915DFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static Instagram({ className }) {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_235_701)">
          <path
            d="M19.9804 5.90203C19.9335 4.83935 19.7617 4.10877 19.5155 3.47571C19.2616 2.80374 18.8709 2.20212 18.359 1.70199C17.8589 1.19408 17.2533 0.799407 16.5891 0.549419C15.9524 0.303247 15.2256 0.1314 14.1629 0.0845459C13.0923 0.0337242 12.7524 0.0219727 10.0371 0.0219727C7.32169 0.0219727 6.98182 0.0337242 5.91517 0.0805779C4.8525 0.127431 4.12192 0.299432 3.48901 0.545451C2.81688 0.799407 2.21527 1.19011 1.71514 1.70199C1.20723 2.20212 0.812712 2.8077 0.562572 3.4719C0.3164 4.10877 0.144552 4.83538 0.0976989 5.89806C0.0468773 6.96867 0.0351257 7.30855 0.0351257 10.0239C0.0351257 12.7393 0.0468773 13.0792 0.0937308 14.1458C0.140584 15.2085 0.312584 15.9391 0.558756 16.5721C0.812712 17.2441 1.20723 17.8457 1.71514 18.3459C2.21527 18.8538 2.82085 19.2484 3.48504 19.4984C4.12192 19.7446 4.84853 19.9165 5.91136 19.9633C6.97785 20.0103 7.31788 20.0219 10.0332 20.0219C12.7486 20.0219 13.0885 20.0103 14.1551 19.9633C15.2178 19.9165 15.9484 19.7446 16.5813 19.4984C17.9254 18.9788 18.9881 17.9161 19.5077 16.5721C19.7538 15.9353 19.9258 15.2085 19.9726 14.1458C20.0195 13.0792 20.0312 12.7393 20.0312 10.0239C20.0312 7.30855 20.0273 6.96867 19.9804 5.90203ZM18.1794 14.0677C18.1363 15.0444 17.9723 15.5719 17.8355 15.9235C17.4994 16.7948 16.8079 17.4863 15.9366 17.8224C15.585 17.9591 15.0538 18.1232 14.0808 18.1661C13.0259 18.2131 12.7095 18.2247 10.041 18.2247C7.37252 18.2247 7.05217 18.2131 6.0011 18.1661C5.02434 18.1232 4.4969 17.9591 4.14527 17.8224C3.71168 17.6621 3.31701 17.4082 2.99667 17.0761C2.66457 16.7518 2.41062 16.3611 2.25037 15.9275C2.11362 15.5759 1.94956 15.0444 1.90667 14.0717C1.85967 13.0168 1.84807 12.7002 1.84807 10.0317C1.84807 7.36319 1.85967 7.04284 1.90667 5.99192C1.94956 5.01517 2.11362 4.48772 2.25037 4.13609C2.41062 3.70235 2.66457 3.30783 3.00064 2.98733C3.3248 2.65524 3.7155 2.40128 4.14923 2.24119C4.50087 2.10444 5.03228 1.94038 6.00506 1.89734C7.05996 1.85049 7.37648 1.83873 10.0448 1.83873C12.7173 1.83873 13.0337 1.85049 14.0848 1.89734C15.0615 1.94038 15.589 2.10444 15.9406 2.24119C16.3742 2.40128 16.7689 2.65524 17.0892 2.98733C17.4213 3.31165 17.6753 3.70235 17.8355 4.13609C17.9723 4.48772 18.1363 5.01898 18.1794 5.99192C18.2262 7.04681 18.238 7.36319 18.238 10.0317C18.238 12.7002 18.2262 13.0128 18.1794 14.0677Z"
            fill="#915DFF"
          />
          <path
            d="M10.0371 4.88623C7.20071 4.88623 4.89938 7.1874 4.89938 10.024C4.89938 12.8605 7.20071 15.1617 10.0371 15.1617C12.8737 15.1617 15.1748 12.8605 15.1748 10.024C15.1748 7.1874 12.8737 4.88623 10.0371 4.88623ZM10.0371 13.3567C8.19699 13.3567 6.70439 11.8642 6.70439 10.024C6.70439 8.18369 8.19699 6.69124 10.0371 6.69124C11.8774 6.69124 13.3698 8.18369 13.3698 10.024C13.3698 11.8642 11.8774 13.3567 10.0371 13.3567Z"
            fill="#915DFF"
          />
          <path
            d="M16.5775 4.68282C16.5775 5.34519 16.0404 5.88225 15.3779 5.88225C14.7156 5.88225 14.1785 5.34519 14.1785 4.68282C14.1785 4.02031 14.7156 3.4834 15.3779 3.4834C16.0404 3.4834 16.5775 4.02031 16.5775 4.68282Z"
            fill="#915DFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_701">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 0.0219727)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static Linkedin({ className }) {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_235_696)">
          <path
            d="M13.3333 6.68848C14.6594 6.68848 15.9312 7.21526 16.8689 8.15294C17.8065 9.09062 18.3333 10.3624 18.3333 11.6885V17.5218H15V11.6885C15 11.2464 14.8244 10.8225 14.5118 10.51C14.1993 10.1974 13.7754 10.0218 13.3333 10.0218C12.8913 10.0218 12.4674 10.1974 12.1548 10.51C11.8423 10.8225 11.6667 11.2464 11.6667 11.6885V17.5218H8.33333V11.6885C8.33333 10.3624 8.86012 9.09062 9.7978 8.15294C10.7355 7.21526 12.0073 6.68848 13.3333 6.68848ZM1.66667 7.52181H5V17.5218H1.66667V7.52181Z"
            stroke="#915DFF"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33333 5.02181C4.25381 5.02181 5 4.27562 5 3.35514C5 2.43467 4.25381 1.68848 3.33333 1.68848C2.41286 1.68848 1.66667 2.43467 1.66667 3.35514C1.66667 4.27562 2.41286 5.02181 3.33333 5.02181Z"
            stroke="#915DFF"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_696">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0 0.0219727)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static Whatsapp({ className }) {
    return (
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_235_707)">
          <path
            d="M14.8789 3.81494C13.2422 2.17432 11.0625 1.27197 8.74609 1.27197C3.96484 1.27197 0.0742188 5.1626 0.0742188 9.94385C0.0742188 11.4712 0.472656 12.9634 1.23047 14.2798L0 18.772L4.59766 17.5649C5.86328 18.2563 7.28906 18.6196 8.74219 18.6196H8.74609C13.5234 18.6196 17.5 14.729 17.5 9.94775C17.5 7.63135 16.5156 5.45557 14.8789 3.81494ZM8.74609 17.1587C7.44922 17.1587 6.17969 16.811 5.07422 16.1548L4.8125 15.9985L2.08594 16.7134L2.8125 14.0532L2.64062 13.7798C1.91797 12.6313 1.53906 11.3071 1.53906 9.94385C1.53906 5.97119 4.77344 2.73682 8.75 2.73682C10.6758 2.73682 12.4844 3.48682 13.8438 4.8501C15.2031 6.21338 16.0391 8.02197 16.0352 9.94775C16.0352 13.9243 12.7188 17.1587 8.74609 17.1587ZM12.6992 11.7603C12.4844 11.6509 11.418 11.1274 11.2188 11.0571C11.0195 10.9829 10.875 10.9478 10.7305 11.1665C10.5859 11.3853 10.1719 11.8696 10.043 12.0181C9.91797 12.1626 9.78906 12.1821 9.57422 12.0728C8.30078 11.436 7.46484 10.936 6.625 9.49463C6.40234 9.11182 6.84766 9.13916 7.26172 8.31104C7.33203 8.1665 7.29687 8.0415 7.24219 7.93213C7.1875 7.82275 6.75391 6.75635 6.57422 6.32275C6.39844 5.90088 6.21875 5.95947 6.08594 5.95166C5.96094 5.94385 5.81641 5.94385 5.67188 5.94385C5.52734 5.94385 5.29297 5.99854 5.09375 6.21338C4.89453 6.43213 4.33594 6.95557 4.33594 8.02197C4.33594 9.08838 5.11328 10.1196 5.21875 10.2642C5.32812 10.4087 6.74609 12.5962 8.92188 13.5376C10.2969 14.1313 10.8359 14.1821 11.5234 14.0806C11.9414 14.0181 12.8047 13.5571 12.9844 13.0493C13.1641 12.5415 13.1641 12.1079 13.1094 12.0181C13.0586 11.9204 12.9141 11.8657 12.6992 11.7603Z"
            fill="#915DFF"
          />
        </g>
        <defs>
          <clipPath id="clip0_235_707">
            <rect
              width="17.5"
              height="20"
              fill="white"
              transform="translate(0 0.0219727)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static CheckShield({ className }) {
    return (
      <svg
        width="101"
        height="57"
        viewBox="0 0 101 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_83_3195)">
          <g clipPath="url(#clip0_83_3195)">
            <rect
              x="57.0003"
              y="12"
              width="32"
              height="32"
              rx="4"
              transform="rotate(0.243351 57.0003 12)"
              fill="white"
            />
            <g filter="url(#filter1_dii_83_3195)">
              <path
                d="M71.5813 38.5295C71.8905 38.6963 72.2795 38.6969 72.5902 38.5327C81.0558 34.0312 81.6933 25.1689 81.6967 22.6482C81.6967 22.4456 81.6377 22.2474 81.5268 22.0778C81.4159 21.9083 81.258 21.7747 81.0724 21.6935L72.6019 17.8982C72.4671 17.838 72.3212 17.8068 72.1736 17.8063C72.026 17.8059 71.88 17.8363 71.7448 17.8956L63.3014 21.6191C63.1178 21.6988 62.961 21.8295 62.8497 21.9958C62.7383 22.162 62.6771 22.3568 62.6733 22.5568C62.6268 25.0647 63.094 33.9507 71.5813 38.5295Z"
                fill="url(#paint0_linear_83_3195)"
              />
            </g>
            <g filter="url(#filter2_dii_83_3195)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.3503 24.1653C77.8373 24.6495 77.8396 25.4368 77.3554 25.9238L72.1569 31.1521C71.6866 31.6251 70.9267 31.6428 70.435 31.192L68.0214 28.98C67.5151 28.516 67.4809 27.7294 67.9449 27.2232C68.4089 26.7169 69.1955 26.6826 69.7018 27.1466L71.2351 28.5519L75.5918 24.1703C76.076 23.6833 76.8633 23.6811 77.3503 24.1653Z"
                fill="white"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_83_3195"
            x="0.86438"
            y="-4"
            width="104.136"
            height="104.136"
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
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_83_3195"
            />
            <feOffset dx="-20" dy="20" />
            <feGaussianBlur stdDeviation="20" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_83_3195"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_83_3195"
              result="effect2_dropShadow_83_3195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_83_3195"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dii_83_3195"
            x="59.2159"
            y="16.5971"
            width="25.9356"
            height="28.104"
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
            <feOffset dy="2.59108" />
            <feGaussianBlur stdDeviation="1.72739" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.318372 0 0 0 0 0.579167 0 0 0 0 0.154444 0 0 0 0.55 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_83_3195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_83_3195"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.20917" />
            <feGaussianBlur stdDeviation="1.9865" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_83_3195"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.518217" />
            <feGaussianBlur stdDeviation="0.345478" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.974333 0 0 0 0 1 0 0 0 0 0.954167 0 0 0 0.67 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_83_3195"
              result="effect3_innerShadow_83_3195"
            />
          </filter>
          <filter
            id="filter2_dii_83_3195"
            x="66.1494"
            y="22.9876"
            width="13.0364"
            height="10.6527"
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
            <feOffset dy="0.652766" />
            <feGaussianBlur stdDeviation="0.734362" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_83_3195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_83_3195"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.815958" />
            <feGaussianBlur stdDeviation="0.407979" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_83_3195"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.489575" />
            <feGaussianBlur stdDeviation="0.489575" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_83_3195"
              result="effect3_innerShadow_83_3195"
            />
          </filter>
          <linearGradient
            id="paint0_linear_83_3195"
            x1="72.2046"
            y1="17.8065"
            x2="72.1161"
            y2="38.6554"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#96D14A" />
            <stop offset="1" stopColor="#61B539" />
          </linearGradient>
          <clipPath id="clip0_83_3195">
            <rect
              x="57.0003"
              y="12"
              width="32"
              height="32"
              rx="4"
              transform="rotate(0.243351 57.0003 12)"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static Union({ className }) {
    return (
      <svg
        width="101"
        height="57"
        viewBox="0 0 101 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_69_2146)">
          <rect
            x="56.6094"
            y="12"
            width="32"
            height="32"
            rx="3"
            transform="rotate(1.09103 56.6094 12)"
            fill="white"
          />
          <g filter="url(#filter1_di_69_2146)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.3601 20.2661C74.5497 20.2506 73.8803 20.895 73.8649 21.7053C73.8495 22.5157 74.4938 23.1851 75.3042 23.2005L78.1531 23.2548L72.626 28.7761L69.9707 26.0177C69.6981 25.7345 69.3232 25.5725 68.9302 25.568C68.5371 25.5635 68.1587 25.7169 67.8797 25.9938L61.5703 32.2552C60.9951 32.8261 60.9915 33.7552 61.5624 34.3305C62.1333 34.9058 63.0625 34.9093 63.6378 34.3384L68.8895 29.1266L71.5482 31.8886C71.8214 32.1723 72.1972 32.3344 72.5911 32.3382C72.985 32.3421 73.3639 32.1874 73.6426 31.909L80.1764 25.3821L80.1251 28.0785C80.1096 28.8888 80.754 29.5582 81.5644 29.5737C82.3747 29.5891 83.0441 28.9447 83.0595 28.1344L83.1786 21.8827C83.194 21.0724 82.5496 20.403 81.7393 20.3875L75.3601 20.2661Z"
              fill="url(#paint0_linear_69_2146)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_dd_69_2146"
            x="0.00012207"
            y="-4"
            width="104.603"
            height="104.604"
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
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_69_2146"
            />
            <feOffset dx="-20" dy="20" />
            <feGaussianBlur stdDeviation="20" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_2146"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.24 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_69_2146"
              result="effect2_dropShadow_69_2146"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_69_2146"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_di_69_2146"
            x="58.6958"
            y="18.9515"
            width="26.9239"
            height="20.1311"
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
            <feOffset dy="1.87755" />
            <feGaussianBlur stdDeviation="1.2204" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.679167 0 0 0 0 0.104705 0 0 0 0 0.104705 0 0 0 0.37 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_69_2146"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_69_2146"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.87755" />
            <feGaussianBlur stdDeviation="0.657141" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_69_2146"
            />
          </filter>
          <linearGradient
            id="paint0_linear_69_2146"
            x1="72.298"
            y1="20.2077"
            x2="72.0174"
            y2="34.9438"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EE7878" />
            <stop offset="1" stopColor="#C6512C" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  static UserPlus({ className }) {
    return (
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_71_2195)">
          <rect
            x="2.5"
            y="0.277649"
            width="24"
            height="22.9447"
            rx="2.97778"
            fill="white"
          />
          <g clipPath="url(#clip0_71_2195)" filter="url(#filter1_d_71_2195)">
            <g filter="url(#filter2_i_71_2195)">
              <path
                d="M7.00992 18.6544C7.00992 18.6544 5.86227 18.6571 5.85962 17.5094C5.85698 16.3618 6.99671 12.9162 12.735 12.903C18.4732 12.8898 19.6288 16.3301 19.6315 17.4777C19.6341 18.6254 18.4864 18.628 18.4864 18.628L7.00992 18.6544ZM12.7323 11.7553C13.6455 11.7532 14.5204 11.3885 15.1645 10.7413C15.8087 10.0941 16.1695 9.21756 16.1674 8.30443C16.1653 7.3913 15.8005 6.51641 15.1533 5.87221C14.5062 5.22802 13.6296 4.8673 12.7165 4.8694C11.8033 4.8715 10.9284 5.23626 10.2843 5.88342C9.64006 6.53059 9.27934 7.40715 9.28144 8.32028C9.28355 9.23341 9.6483 10.1083 10.2955 10.7525C10.9426 11.3967 11.8192 11.7574 12.7323 11.7553Z"
                fill="url(#paint0_linear_71_2195)"
              />
            </g>
            <g filter="url(#filter3_i_71_2195)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.3318 8.29253C21.484 8.29218 21.6301 8.3523 21.738 8.45966C21.8458 8.56703 21.9066 8.71284 21.907 8.86503L21.9109 10.5865L23.6324 10.5825C23.7846 10.5822 23.9307 10.6423 24.0386 10.7497C24.1464 10.857 24.2072 11.0029 24.2076 11.1551C24.2079 11.3072 24.1478 11.4533 24.0404 11.5612C23.9331 11.6691 23.7873 11.7298 23.6351 11.7302L21.9136 11.7342L21.9175 13.4556C21.9179 13.6078 21.8578 13.7539 21.7504 13.8618C21.643 13.9696 21.4972 14.0304 21.345 14.0308C21.1929 14.0311 21.0468 13.971 20.9389 13.8637C20.831 13.7563 20.7702 13.6105 20.7699 13.4583L20.7659 11.7368L19.0445 11.7408C18.8923 11.7411 18.7462 11.681 18.6383 11.5736C18.5304 11.4663 18.4697 11.3205 18.4693 11.1683C18.469 11.0161 18.5291 10.87 18.6364 10.7621C18.7438 10.6543 18.8896 10.5935 19.0418 10.5931L20.7633 10.5892L20.7593 8.86767C20.759 8.71549 20.8191 8.56939 20.9265 8.46153C21.0338 8.35367 21.1796 8.29288 21.3318 8.29253Z"
                fill="url(#paint1_linear_71_2195)"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_di_71_2195"
            x="0.0707257"
            y="-0.569773"
            width="28.8585"
            height="28.6507"
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
            <feOffset dy="2.42927" />
            <feGaussianBlur stdDeviation="1.21464" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2195"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.847422" />
            <feGaussianBlur stdDeviation="0.847422" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2195"
            />
          </filter>
          <filter
            id="filter1_d_71_2195"
            x="3.92573"
            y="2.5183"
            width="22.2039"
            height="22.2039"
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
            <feOffset dy="1.8702" />
            <feGaussianBlur stdDeviation="0.949784" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.61152 0 0 0 0 0.691638 0 0 0 0 0.441269 0 0 0 0.46 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2195"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2195"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_i_71_2195"
            x="5.85962"
            y="4.02513"
            width="13.7718"
            height="14.6293"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.844252" />
            <feGaussianBlur stdDeviation="0.949784" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_71_2195"
            />
          </filter>
          <filter
            id="filter3_i_71_2195"
            x="18.4693"
            y="7.87042"
            width="5.73827"
            height="6.16035"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.422126" />
            <feGaussianBlur stdDeviation="0.316595" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_71_2195"
            />
          </filter>
          <linearGradient
            id="paint0_linear_71_2195"
            x1="12.7165"
            y1="4.8694"
            x2="12.7482"
            y2="18.6412"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ADD851" />
            <stop offset="1" stopColor="#508725" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_71_2195"
            x1="21.3318"
            y1="8.29253"
            x2="21.345"
            y2="14.0308"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ADD851" />
            <stop offset="1" stopColor="#508725" />
          </linearGradient>
          <clipPath id="clip0_71_2195">
            <rect
              width="18.3625"
              height="18.3625"
              fill="white"
              transform="translate(5.8253 2.58997) rotate(-0.131918)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static Hours({ className }) {
    return (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_71_2207)">
          <rect
            x="3"
            y="0.747925"
            width="27"
            height="26.0041"
            rx="3.36089"
            fill="white"
          />
          <g clipPath="url(#clip0_71_2207)">
            <g filter="url(#filter1_di_71_2207)">
              <path
                d="M17.8997 5.60166C13.4068 5.10446 9.34699 8.35524 8.84978 12.8482C8.35258 17.3411 11.6034 21.4009 16.0963 21.8981C20.5892 22.3953 24.649 19.1445 25.1462 14.6516C25.6434 10.1587 22.3926 6.09887 17.8997 5.60166Z"
                fill="url(#paint0_linear_71_2207)"
              />
            </g>
            <g filter="url(#filter2_di_71_2207)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3188 8.00256C17.875 8.06411 18.2768 8.55807 18.2161 9.10585L17.7679 13.1561L21.0884 15.9239C21.5162 16.2805 21.5708 16.9103 21.2102 17.3306C20.8497 17.751 20.2106 17.8026 19.7828 17.446L16.0496 14.3342C15.7916 14.1191 15.6588 13.792 15.6953 13.4616L16.202 8.88295C16.2626 8.33518 16.7626 7.94101 17.3188 8.00256Z"
                fill="white"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_di_71_2207"
            x="0.707533"
            y="-0.0517734"
            width="31.5849"
            height="31.3887"
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
            <feOffset dy="2.29247" />
            <feGaussianBlur stdDeviation="1.14623" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2207"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2207"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.799698" />
            <feGaussianBlur stdDeviation="0.799698" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2207"
            />
          </filter>
          <filter
            id="filter1_di_71_2207"
            x="7.47053"
            y="4.99878"
            width="19.0549"
            height="19.5294"
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
            <feOffset dy="1.25085" />
            <feGaussianBlur stdDeviation="0.664516" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2207"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2207"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.552671" />
            <feGaussianBlur stdDeviation="0.77374" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2207"
            />
          </filter>
          <filter
            id="filter2_di_71_2207"
            x="13.6997"
            y="7.33301"
            width="9.73857"
            height="14.8414"
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
            <feOffset dy="2.50171" />
            <feGaussianBlur stdDeviation="0.994808" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.387156 0 0 0 0 0.101562 0 0 0 0 0.4875 0 0 0 0.63 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2207"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2207"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.663205" />
            <feGaussianBlur stdDeviation="0.607938" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2207"
            />
          </filter>
          <linearGradient
            id="paint0_linear_71_2207"
            x1="11.6815"
            y1="3.37464"
            x2="27.3948"
            y2="26.3859"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6B7AFF" />
            <stop offset="1" stopColor="#1430C6" />
          </linearGradient>
          <clipPath id="clip0_71_2207">
            <rect
              width="19.6751"
              height="19.6751"
              fill="white"
              transform="translate(8.30212 2.89008) rotate(6.31486)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static DataCheck({ className }) {
    return (
      <svg
        width="31"
        height="32"
        viewBox="0 0 31 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_71_2189)">
          <rect
            x="3.5"
            y="0.75"
            width="24"
            height="24"
            rx="3.11474"
            fill="white"
          />
          <g clipPath="url(#clip0_71_2189)">
            <g filter="url(#filter1_dii_71_2189)">
              <path
                d="M15.0704 20.6373C15.3222 20.7731 15.6389 20.7736 15.8919 20.6399C22.7852 16.9745 23.3043 9.75821 23.307 7.70573C23.307 7.54077 23.2589 7.37937 23.1687 7.24131C23.0784 7.10324 22.9498 6.9945 22.7986 6.92841L15.9014 3.83797C15.7917 3.78903 15.6729 3.76356 15.5527 3.7632C15.4325 3.76284 15.3136 3.78759 15.2036 3.83587L8.32842 6.86781C8.17895 6.93266 8.05127 7.03912 7.96059 7.17449C7.86992 7.30986 7.82007 7.46845 7.81699 7.63135C7.77913 9.67339 8.15958 16.909 15.0704 20.6373Z"
                fill="url(#paint0_linear_71_2189)"
              />
            </g>
            <g filter="url(#filter2_dii_71_2189)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.832 8.6745C20.2517 9.09186 20.2537 9.77047 19.8363 10.1902L15.3557 14.6965C14.9503 15.1043 14.2954 15.1195 13.8715 14.731L11.7913 12.8244C11.3549 12.4245 11.3253 11.7465 11.7253 11.3101C12.1252 10.8737 12.8032 10.8442 13.2396 11.2441L14.5612 12.4554L18.3163 8.67883C18.7336 8.25908 19.4122 8.25714 19.832 8.6745Z"
                fill="white"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_di_71_2189"
            x="0.189347"
            y="-0.404879"
            width="30.6213"
            height="31.7762"
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
            <feOffset dy="3.31065" />
            <feGaussianBlur stdDeviation="1.65533" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2189"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2189"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.15488" />
            <feGaussianBlur stdDeviation="1.15488" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2189"
            />
          </filter>
          <filter
            id="filter1_dii_71_2189"
            x="5.43308"
            y="2.92958"
            width="20.2556"
            height="21.9782"
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
            <feOffset dy="1.7863" />
            <feGaussianBlur stdDeviation="1.19087" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.318372 0 0 0 0 0.579167 0 0 0 0 0.154444 0 0 0 0.55 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2189"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2189"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.833608" />
            <feGaussianBlur stdDeviation="1.3695" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2189"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.357261" />
            <feGaussianBlur stdDeviation="0.238174" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.974333 0 0 0 0 1 0 0 0 0 0.954167 0 0 0 0.67 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_71_2189"
              result="effect3_innerShadow_71_2189"
            />
          </filter>
          <filter
            id="filter2_dii_71_2189"
            x="10.3718"
            y="7.7673"
            width="10.848"
            height="8.79347"
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
            <feOffset dy="0.476348" />
            <feGaussianBlur stdDeviation="0.535891" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2189"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2189"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.595434" />
            <feGaussianBlur stdDeviation="0.297717" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2189"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.357261" />
            <feGaussianBlur stdDeviation="0.357261" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_71_2189"
              result="effect3_innerShadow_71_2189"
            />
          </filter>
          <linearGradient
            id="paint0_linear_71_2189"
            x1="15.5779"
            y1="3.76331"
            x2="15.5058"
            y2="20.7398"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#96D14A" />
            <stop offset="1" stopColor="#61B539" />
          </linearGradient>
          <clipPath id="clip0_71_2189">
            <rect
              width="20.602"
              height="20.602"
              fill="white"
              transform="translate(5.2428 2.40533) rotate(0.243351)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  static Star({ className }) {
    return (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_71_2181)">
          <rect
            x="4.5"
            y="0.75"
            width="24"
            height="24"
            rx="3.11909"
            fill="white"
          />
          <g filter="url(#filter1_dii_71_2181)">
            <path
              d="M15.5415 3.94086C15.9221 3.16976 17.0217 3.16977 17.4023 3.94086L19.4368 8.06258C19.5879 8.3685 19.8796 8.58064 20.2172 8.62999L24.7686 9.29524C25.6193 9.41959 25.9584 10.4653 25.3425 11.0652L22.0507 14.2713C21.806 14.5097 21.6943 14.8533 21.752 15.19L22.5287 19.7182C22.6741 20.5659 21.7843 21.2122 21.0231 20.8119L16.9549 18.6725C16.6525 18.5135 16.2913 18.5135 15.989 18.6725L11.9207 20.8119C11.1596 21.2122 10.2698 20.5659 10.4152 19.7182L11.1918 15.19C11.2496 14.8533 11.1378 14.5097 10.8931 14.2713L7.60138 11.0652C6.98548 10.4653 7.32454 9.41959 8.17526 9.29524L12.7267 8.62999C13.0642 8.58064 13.356 8.3685 13.507 8.06258L15.5415 3.94086Z"
              fill="url(#paint0_linear_71_2181)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_di_71_2181"
            x="0.887638"
            y="-0.510127"
            width="31.2247"
            height="32.4849"
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
            <feOffset dy="3.61236" />
            <feGaussianBlur stdDeviation="1.80618" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2181"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2181"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.26013" />
            <feGaussianBlur stdDeviation="1.26013" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2181"
            />
          </filter>
          <filter
            id="filter1_dii_71_2181"
            x="3.13633"
            y="2.32498"
            width="26.6712"
            height="25.8715"
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
            <feOffset dy="3.11272" />
            <feGaussianBlur stdDeviation="2.07515" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.441638 0 0 0 0 0.245593 0 0 0 0 0.0646293 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_71_2181"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_71_2181"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.03757" />
            <feGaussianBlur stdDeviation="1.03757" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.549971 0 0 0 0 0.304646 0 0 0 0 0.0781912 0 0 0 0.57 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_71_2181"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-1.03757" />
            <feGaussianBlur stdDeviation="0.518787" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.981301 0 0 0 0 0.813007 0 0 0 0.72 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_71_2181"
              result="effect3_innerShadow_71_2181"
            />
          </filter>
          <linearGradient
            id="paint0_linear_71_2181"
            x1="12.3364"
            y1="4.25417"
            x2="16.852"
            y2="20.471"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0001" stopColor="#FFED8C" />
            <stop offset="1" stopColor="#F4B335" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  static PlayBtn({ className }) {
    return (
      <svg
        width="44"
        height="45"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 39.25C31.1127 39.25 38.5 31.8627 38.5 22.75C38.5 13.6373 31.1127 6.25 22 6.25C12.8873 6.25 5.5 13.6373 5.5 22.75C5.5 31.8627 12.8873 39.25 22 39.25Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M25.4375 22.75L17.1875 17.25V28.25L25.4375 22.75Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.8125 17.25V28.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
