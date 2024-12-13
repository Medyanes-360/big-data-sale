export default class Icons {
  static ArrowRight({ className, color = "#FFFFFF" }) {
    return (
      <svg
        width="32"
        height="41"
        viewBox="0 0 32 41"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 20.377H9M9 20.377L16 27.377M9 20.377L16 13.377"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  static ArrowLeft({ color = "#FFFFFF" }) {
    return (
      <svg
        width="32"
        height="41"
        viewBox="0 0 32 41"
        fill={color}
        style={{ color: "#fff" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 20.377H9M9 20.377L16 27.377M9 20.377L16 13.377"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static CheckTertioary() {
    // Default beyaz
    return (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="16"
          height="16"
          transform="translate(0 0.876953)"
          fill="#915DFF"
        />
        <path
          d="M13.1445 4.02539L13.8535 4.72852L6.00195 12.5859L2.14648 8.73047L2.85547 8.02148L6.00195 11.168L13.1445 4.02539Z"
          fill="white"
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
        ,
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
        className={className}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dii_0_1)">
          <path
            d="M9.48192 17.0756C9.71862 17.2033 10.0164 17.2037 10.2542 17.078C16.7341 13.6325 17.222 6.8489 17.2246 4.91949C17.2246 4.76442 17.1794 4.6127 17.0946 4.48292C17.0097 4.35313 16.8888 4.25092 16.7467 4.18879L10.2631 1.28367C10.16 1.23766 10.0483 1.21372 9.93533 1.21338C9.82236 1.21304 9.71056 1.23631 9.60711 1.28169L3.14425 4.13182C3.00374 4.19278 2.88372 4.29285 2.79848 4.42011C2.71324 4.54736 2.66638 4.69644 2.66349 4.84958C2.6279 6.76916 2.98554 13.5708 9.48192 17.0756Z"
            fill="url(#paint0_linear_0_1)"
          />
        </g>
        <g filter="url(#filter1_dii_0_1)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8978 6.08074C14.2706 6.45138 14.2723 7.05403 13.9016 7.42679L9.92259 11.4287C9.56257 11.7907 8.98097 11.8042 8.60454 11.4592L6.75716 9.7661C6.36963 9.41093 6.3434 8.80885 6.69857 8.42133C7.05374 8.0338 7.65582 8.00756 8.04335 8.36274L9.21703 9.43842L12.5517 6.08459C12.9224 5.71183 13.525 5.7101 13.8978 6.08074Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_dii_0_1"
            x="0.0170405"
            y="0.28784"
            width="19.852"
            height="21.5117"
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
            <feOffset dy="1.9833" />
            <feGaussianBlur stdDeviation="1.3222" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.318372 0 0 0 0 0.579167 0 0 0 0 0.154444 0 0 0 0.55 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.925539" />
            <feGaussianBlur stdDeviation="1.52053" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.39666" />
            <feGaussianBlur stdDeviation="0.26444" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.974333 0 0 0 0 1 0 0 0 0 0.954167 0 0 0 0.67 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_0_1"
              result="effect3_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter1_dii_0_1"
            x="5.32422"
            y="5.17933"
            width="9.97846"
            height="8.15387"
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
            <feOffset dy="0.499648" />
            <feGaussianBlur stdDeviation="0.562104" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.62456" />
            <feGaussianBlur stdDeviation="0.31228" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect2_innerShadow_0_1"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-0.374736" />
            <feGaussianBlur stdDeviation="0.374736" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_innerShadow_0_1"
              result="effect3_innerShadow_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="9.95905"
            y1="1.21348"
            x2="9.89127"
            y2="17.1719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#96D14A" />
            <stop offset="1" stopColor="#61B539" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  static Union({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 28 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_di_525_3554)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.36 1.26606C16.5497 1.25063 15.8803 1.89502 15.8648 2.70534C15.8494 3.51567 16.4938 4.18508 17.3041 4.20051L20.1531 4.25477L14.6259 9.7761L11.9706 7.01767C11.698 6.73448 11.3232 6.57249 10.9301 6.568C10.5371 6.56351 10.1586 6.71689 9.87964 6.99377L3.57029 13.2552C2.99502 13.8261 2.99147 14.7552 3.56237 15.3305C4.13327 15.9058 5.06243 15.9093 5.6377 15.3384L10.8895 10.1266L13.5482 12.8886C13.8214 13.1723 14.1972 13.3344 14.5911 13.3382C14.985 13.3421 15.3639 13.1874 15.6426 12.909L22.1764 6.3821L22.125 9.07849C22.1096 9.88882 22.754 10.5582 23.5643 10.5737C24.3746 10.5891 25.044 9.9447 25.0595 9.13438L25.1785 2.88272C25.194 2.07239 24.5496 1.40298 23.7392 1.38755L17.36 1.26606Z"
            fill="url(#paint0_linear_525_3554)"
          />
        </g>
        <defs>
          <filter
            id="filter0_di_525_3554"
            x="0.695697"
            y="-0.048504"
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
              result="effect1_dropShadow_525_3554"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_525_3554"
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
              result="effect2_innerShadow_525_3554"
            />
          </filter>
          <linearGradient
            id="paint0_linear_525_3554"
            x1="14.298"
            y1="1.20774"
            x2="14.0173"
            y2="15.9438"
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
  static Plus({ className }) {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 12.877H20.25"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4.62695V21.127"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static Minus({ className }) {
    return (
      <svg
        width="14"
        height="2"
        className={className}
        viewBox="0 0 14 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.0708H13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static Cancle({ className }) {
    return (
      <svg
        width="24"
        className={className}
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.4 19.6548L5 18.2548L10.6 12.6548L5 7.05479L6.4 5.65479L12 11.2548L17.6 5.65479L19 7.05479L13.4 12.6548L19 18.2548L17.6 19.6548L12 14.0548L6.4 19.6548Z"
          fill="currentColor"
        />
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
        className={className}
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

  static Calendar({ className }) {
    return (
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.8051 4.35981V1.7998C4.8051 1.2398 5.2451 0.799805 5.8051 0.799805C6.3651 0.799805 6.8051 1.2398 6.8051 1.7998V4.35981C6.8051 4.91981 6.3651 5.35981 5.8051 5.35981C5.2451 5.35981 4.8051 4.91981 4.8051 4.35981ZM12.2051 5.35981C12.7651 5.35981 13.2051 4.91981 13.2051 4.35981V1.7998C13.2051 1.2398 12.7651 0.799805 12.2051 0.799805C11.6451 0.799805 11.2051 1.2398 11.2051 1.7998V4.35981C11.2051 4.91981 11.6451 5.35981 12.2051 5.35981ZM5.4451 8.7998H12.5451C12.9851 8.7998 13.3451 8.43981 13.3451 7.9998C13.3451 7.5598 12.9851 7.1998 12.5451 7.1998H5.4451C5.0051 7.1998 4.6451 7.5598 4.6451 7.9998C4.6451 8.43981 5.0051 8.7998 5.4451 8.7998ZM16.6051 2.1998H14.9451C14.5051 2.1998 14.1451 2.5598 14.1451 2.9998C14.1451 3.4398 14.5051 3.7998 14.9451 3.7998H15.8051V17.3998H2.2051V3.7998H3.0651C3.5051 3.7998 3.8651 3.4398 3.8651 2.9998C3.8651 2.5598 3.5051 2.1998 3.0651 2.1998H1.4051C0.965102 2.1998 0.605103 2.63979 0.605103 3.07979V18.1998C0.605103 18.6398 0.965102 18.9998 1.4051 18.9998H16.6051C17.0451 18.9998 17.4051 18.6398 17.4051 18.1998V3.07979C17.4051 2.63979 17.0451 2.1998 16.6051 2.1998ZM8.3451 3.7998H9.6651C10.1051 3.7998 10.4651 3.4398 10.4651 2.9998C10.4651 2.5598 10.1051 2.1998 9.6651 2.1998H8.3451C7.9051 2.1998 7.5451 2.5598 7.5451 2.9998C7.5451 3.4398 7.9051 3.7998 8.3451 3.7998ZM5.4451 12.3998H12.5451C12.9851 12.3998 13.3451 12.0398 13.3451 11.5998C13.3451 11.1598 12.9851 10.7998 12.5451 10.7998H5.4451C5.0051 10.7998 4.6451 11.1598 4.6451 11.5998C4.6451 12.0398 5.0051 12.3998 5.4451 12.3998Z"
          fill="#915DFF"
        />
      </svg>
    );
  }
  static Like({ className }) {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.765 19.1998C10.285 19.1998 6.38498 18.3798 5.42498 17.6998C5.20498 17.5398 5.08499 17.2998 5.08499 17.0398V9.2198C5.08499 8.9798 5.20499 8.73981 5.38499 8.59981C5.44499 8.55981 6.84499 7.4598 8.30499 6.6398C10.125 5.6398 11.385 4.23981 11.685 3.35981C12.045 2.27981 12.565 0.799805 14.205 0.799805C14.985 0.799805 15.625 1.2398 15.965 1.9998C16.645 3.5598 15.925 5.7198 14.725 7.4198C15.525 7.5998 16.525 7.8598 17.125 8.0398C18.225 8.3798 18.945 9.17982 19.105 10.1598C19.245 11.1598 18.745 12.1798 17.685 12.9598C16.905 15.0598 15.565 18.3798 14.585 18.9198C14.205 19.1198 13.545 19.1998 12.765 19.1998ZM6.68499 16.5598C8.20499 17.1998 12.885 17.8598 13.765 17.5198C14.225 17.0998 15.405 14.4198 16.225 12.1598C16.285 11.9998 16.385 11.8598 16.525 11.7598C17.185 11.3198 17.525 10.7998 17.465 10.3598C17.405 9.99981 17.085 9.6998 16.605 9.5398C15.605 9.2198 13.125 8.67981 13.085 8.67981C12.805 8.61981 12.585 8.4198 12.485 8.1398C12.385 7.8598 12.465 7.55981 12.665 7.35982C14.465 5.41982 14.785 3.4398 14.445 2.6398C14.345 2.3998 14.225 2.3998 14.165 2.3998C13.765 2.3998 13.585 2.67981 13.165 3.87981C12.685 5.27981 11.025 6.9598 9.04499 8.0398C8.08499 8.5598 7.12499 9.2598 6.64499 9.6198V16.5598H6.68499ZM3.52498 17.1198V9.1398C3.52498 8.4198 2.94498 7.8398 2.22498 7.8398C1.50498 7.8398 0.924983 8.4198 0.924983 9.1398V17.1198C0.924983 17.8398 1.50498 18.4198 2.22498 18.4198C2.92498 18.4198 3.52498 17.8198 3.52498 17.1198Z"
          fill="#915DFF"
        />
      </svg>
    );
  }
  static Chat({ className }) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.25895 16.5934C3.14076 14.7084 2.74916 12.48 3.15768 10.3267C3.56621 8.17341 4.74675 6.24331 6.47764 4.89884C8.20853 3.55437 10.3707 2.88801 12.5581 3.0249C14.7455 3.16178 16.8078 4.09249 18.3575 5.64225C19.9073 7.19202 20.838 9.25423 20.9749 11.4417C21.1118 13.6291 20.4455 15.7912 19.101 17.5221C17.7565 19.253 15.8264 20.4336 13.6732 20.8421C11.5199 21.2507 9.29149 20.8591 7.40649 19.7409L7.40651 19.7408L4.29808 20.6289C4.16947 20.6657 4.03338 20.6673 3.90391 20.6338C3.77443 20.6002 3.65628 20.5327 3.5617 20.4381C3.46713 20.3435 3.39956 20.2254 3.36601 20.0959C3.33246 19.9664 3.33415 19.8303 3.37089 19.7017L4.25901 16.5933L4.25895 16.5934Z"
          stroke="#915DFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z"
          fill="#915DFF"
        />
        <path
          d="M7.5 13.125C8.12132 13.125 8.625 12.6213 8.625 12C8.625 11.3787 8.12132 10.875 7.5 10.875C6.87868 10.875 6.375 11.3787 6.375 12C6.375 12.6213 6.87868 13.125 7.5 13.125Z"
          fill="#915DFF"
        />
        <path
          d="M16.5 13.125C17.1213 13.125 17.625 12.6213 17.625 12C17.625 11.3787 17.1213 10.875 16.5 10.875C15.8787 10.875 15.375 11.3787 15.375 12C15.375 12.6213 15.8787 13.125 16.5 13.125Z"
          fill="#915DFF"
        />
      </svg>
    );
  }
  static DataPackets({ className }) {
    return (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9969 29.4673C22.9814 29.3131 22.9092 29.1702 22.7943 29.0663C22.6794 28.9623 22.5299 28.9048 22.375 28.9048H18.625C18.4701 28.9048 18.3206 28.9623 18.2057 29.0663C18.0908 29.1702 18.0186 29.3131 18.0031 29.4673L17.3781 35.7173C17.3695 35.8042 17.3791 35.8919 17.4065 35.9748C17.4338 36.0578 17.4781 36.1341 17.5367 36.1988C17.5953 36.2636 17.6668 36.3154 17.7466 36.3508C17.8264 36.3863 17.9127 36.4047 18 36.4048H23C23.0874 36.4048 23.1737 36.3865 23.2536 36.351C23.3334 36.3156 23.4049 36.2638 23.4635 36.1991C23.5221 36.1343 23.5665 36.0579 23.5938 35.9749C23.621 35.892 23.6306 35.8042 23.6219 35.7173L22.9969 29.4673Z"
          fill="#666666"
        />
        <path
          d="M38.625 1.40479H2.375C2.20924 1.40479 2.05027 1.47063 1.93306 1.58784C1.81585 1.70505 1.75 1.86402 1.75 2.02979V29.5298C1.75 29.6955 1.81585 29.8545 1.93306 29.9717C2.05027 30.0889 2.20924 30.1548 2.375 30.1548H38.625C38.7908 30.1548 38.9497 30.0889 39.0669 29.9717C39.1842 29.8545 39.25 29.6955 39.25 29.5298V2.02979C39.25 1.86402 39.1842 1.70505 39.0669 1.58784C38.9497 1.47063 38.7908 1.40479 38.625 1.40479Z"
          fill="#E6E6E6"
        />
        <path
          d="M25.5 35.1548H15.5C15.3342 35.1548 15.1753 35.2206 15.0581 35.3378C14.9408 35.4551 14.875 35.614 14.875 35.7798V38.2798C14.875 38.4455 14.9408 38.6045 15.0581 38.7217C15.1753 38.8389 15.3342 38.9048 15.5 38.9048H25.5C25.6658 38.9048 25.8247 38.8389 25.9419 38.7217C26.0592 38.6045 26.125 38.4455 26.125 38.2798V35.7798C26.125 35.614 26.0592 35.4551 25.9419 35.3378C25.8247 35.2206 25.6658 35.1548 25.5 35.1548Z"
          fill="#170A33"
        />
        <path
          d="M10.8125 27.6547C7.65875 27.6547 4.61625 27.3091 1.75 26.6716V29.5297C1.75 29.6954 1.81585 29.8544 1.93306 29.9716C2.05027 30.0888 2.20924 30.1547 2.375 30.1547H38.625C38.7908 30.1547 38.9497 30.0888 39.0669 29.9716C39.1842 29.8544 39.25 29.6954 39.25 29.5297V14.0234C34.5175 22.0391 23.5681 27.6547 10.8125 27.6547Z"
          fill="#CCCCCC"
        />
        <path d="M9.875 11.4048H14.875V12.6548H9.875V11.4048Z" fill="#170A33" />
        <path d="M11.75 9.52979H13V14.5298H11.75V9.52979Z" fill="#170A33" />
        <path
          d="M20.33 17.3329L18.5625 15.5648C18.443 15.452 18.285 15.3892 18.1207 15.3892C17.9563 15.3892 17.7983 15.452 17.6788 15.5648L15.9113 17.3329C15.8532 17.3909 15.8071 17.4598 15.7757 17.5356C15.7442 17.6114 15.728 17.6927 15.728 17.7748C15.728 17.8568 15.7442 17.9381 15.7757 18.0139C15.8071 18.0898 15.8532 18.1586 15.9113 18.2166L17.6788 19.9848C17.7367 20.043 17.8055 20.0892 17.8814 20.1208C17.9572 20.1523 18.0385 20.1685 18.1207 20.1685C18.2028 20.1685 18.2841 20.1523 18.3599 20.1208C18.4358 20.0892 18.5046 20.043 18.5625 19.9848L20.33 18.2166C20.4472 18.0994 20.513 17.9405 20.513 17.7748C20.513 17.609 20.4472 17.4501 20.33 17.3329Z"
          fill="#666666"
        />
        <path
          d="M26.6425 22.7623L20.7712 16.891C20.6518 16.7783 20.4937 16.7154 20.3294 16.7154C20.1651 16.7154 20.007 16.7783 19.8875 16.891L17.2362 19.5429C17.1782 19.6009 17.1321 19.6698 17.1006 19.7456C17.0692 19.8214 17.053 19.9027 17.053 19.9848C17.053 20.0669 17.0692 20.1481 17.1006 20.224C17.1321 20.2998 17.1782 20.3687 17.2362 20.4267L23.1075 26.2973C23.1654 26.3555 23.2343 26.4017 23.3101 26.4333C23.3859 26.4648 23.4672 26.4811 23.5494 26.4811C23.6315 26.4811 23.7128 26.4648 23.7887 26.4333C23.8645 26.4017 23.9333 26.3555 23.9912 26.2973L26.6425 23.646C26.7597 23.5288 26.8255 23.3699 26.8255 23.2042C26.8255 23.0384 26.7597 22.8795 26.6425 22.7623ZM22.375 5.77979H36.125V7.02979H22.375V5.77979ZM28.625 8.90479H36.125V10.1548H28.625V8.90479ZM26.125 8.90479H27.375V10.1548H26.125V8.90479ZM22.375 8.90479H24.875V10.1548H22.375V8.90479ZM22.375 12.0298H36.125V13.2798H22.375V12.0298ZM22.375 15.1548H36.125V16.4048H22.375V15.1548ZM25.5 18.2798H36.125V19.5298H25.5V18.2798ZM28.625 21.4048H36.125V22.6548H28.625V21.4048ZM28.625 24.5298H36.125V25.7798H28.625V24.5298ZM4.875 21.4048H16.125V22.6548H4.875V21.4048ZM4.875 24.5298H16.125V25.7798H4.875V24.5298Z"
          fill="#170A33"
        />
        <path
          d="M12.375 4.52979C8.23937 4.52979 4.875 7.89416 4.875 12.0298C4.875 16.1654 8.23937 19.5298 12.375 19.5298C16.5106 19.5298 19.875 16.1654 19.875 12.0298C19.875 7.89416 16.5106 4.52979 12.375 4.52979ZM12.375 17.0298C9.61812 17.0298 7.375 14.7867 7.375 12.0298C7.375 9.27291 9.61812 7.02979 12.375 7.02979C15.1319 7.02979 17.375 9.27291 17.375 12.0298C17.375 14.7867 15.1319 17.0298 12.375 17.0298Z"
          fill="#915DFF"
        />
      </svg>
    );
  }
  static ChoosePackets({ className }) {
    return (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.183 2.06665H4.7896C3.74841 2.06665 2.90436 2.90612 2.90436 3.94165V22.6917C2.90436 23.7272 3.74841 24.5667 4.7896 24.5667H31.183C32.2242 24.5667 33.0683 23.7272 33.0683 22.6917V3.94165C33.0683 2.90612 32.2242 2.06665 31.183 2.06665Z"
          fill="#E6F3FF"
        />
        <path
          d="M31.183 21.4424V5.19238C31.183 4.50203 30.6203 3.94238 29.9262 3.94238L6.04643 3.94238C5.3523 3.94238 4.7896 4.50203 4.7896 5.19238V21.4424C4.7896 22.1327 5.3523 22.6924 6.04643 22.6924H29.9262C30.6203 22.6924 31.183 22.1327 31.183 21.4424Z"
          fill="#915DFF"
        />
        <path
          d="M21.1283 22.6918C19.8714 23.9669 18.6146 23.9669 17.3578 22.6918C16.9673 19.2655 16.9336 13.9642 17.2567 10.5378C17.336 9.69633 17.8885 8.92513 18.7044 8.68866C19.0635 8.58458 19.4226 8.58458 19.7817 8.68866C20.5975 8.92513 21.15 9.69633 21.2294 10.5378C21.5524 13.9642 21.5187 19.2655 21.1283 22.6918Z"
          fill="#E6F3FF"
        />
        <path
          d="M20.5001 20.8167C20.5001 20.8167 23.0137 18.3167 24.899 20.8167C24.899 20.8167 26.7842 19.5667 28.0411 21.4417C28.0411 21.4417 32.0258 21.4417 30.2435 28.9842C30.0727 29.7068 29.6455 30.3401 29.0655 30.8073C28.1353 31.5567 26.7842 32.9273 26.7842 34.5667H17.9864V33.5707C17.9864 33.0473 17.7452 32.5571 17.3349 32.2293C15.6649 30.8953 11.7428 26.6744 17.358 19.5667L20.5001 20.8167Z"
          fill="#E6F3FF"
        />
        <path
          d="M26.7841 34.5667H17.9863C17.2922 34.5667 16.7295 35.1263 16.7295 35.8167V37.0667C16.7295 37.757 17.2922 38.3166 17.9863 38.3166H26.7841C27.4783 38.3166 28.041 37.757 28.041 37.0667V35.8167C28.041 35.1263 27.4783 34.5667 26.7841 34.5667Z"
          fill="#915DFF"
        />
        <path
          d="M31.183 1.40479H4.7896C3.40329 1.40479 2.27594 2.526 2.27594 3.90479V22.6548C2.27594 24.0336 3.40329 25.1548 4.7896 25.1548H13.9299C13.2656 29.2611 15.8601 31.8162 16.9437 32.6829C17.3719 32.9803 17.3798 33.5513 17.3579 34.0199C16.628 34.2788 16.1011 34.9661 16.1011 35.7798V37.0298C16.1011 38.0637 16.9467 38.9048 17.9863 38.9048H26.7841C27.8237 38.9048 28.6694 38.0637 28.6694 37.0298V35.7798C28.6694 34.9855 28.1685 34.3092 27.4659 34.0364C27.7104 32.8265 28.785 31.7994 29.4623 31.2583C31.2382 29.8965 31.2881 26.8848 31.3121 25.1418C32.6374 25.0734 33.6967 23.9896 33.6967 22.6548V3.90479C33.6967 2.526 32.5694 1.40479 31.183 1.40479ZM27.4126 37.0298C27.4126 37.3746 27.1309 37.6548 26.7841 37.6548H17.9863C17.6396 37.6548 17.3579 37.3746 17.3579 37.0298V35.7798C17.3579 35.4349 17.6396 35.1548 17.9863 35.1548H26.7841C27.1309 35.1548 27.4126 35.4349 27.4126 35.7798V37.0298ZM29.6286 28.8059C29.496 29.3674 29.1548 29.8942 28.6712 30.2866C27.8348 30.9556 26.4945 32.2574 26.2097 33.9048H18.6147C18.6775 33.0704 18.4093 32.2194 17.7267 31.7051C16.2015 30.485 13.2663 27.1857 16.6307 21.6653C16.7306 22.2596 16.5403 23.2381 17.3573 23.2798C17.7295 23.2814 18.0265 22.9529 17.982 22.5846C17.604 19.2624 17.5598 13.9805 17.882 10.5594C18.068 8.7674 20.4167 8.75553 20.6037 10.5595C20.8498 13.1681 20.8903 16.9211 20.7074 20.1194C20.7169 20.3445 20.8098 20.5637 21.0124 20.6815C21.2114 20.8079 21.4503 20.7873 21.6568 20.6919C23.3082 19.7153 24.1275 20.7987 24.3963 21.1545C24.5957 21.42 24.9695 21.4829 25.2475 21.2998C25.3874 21.207 26.6356 20.4355 27.5181 21.7515C27.631 21.9205 27.8286 22.0243 28.033 22.0298C28.0637 22.0304 28.7946 22.0585 29.3629 22.7927C29.9526 23.5544 30.4779 25.2164 29.6286 28.8059ZM32.4399 22.6548C32.4402 23.3477 31.8687 23.911 31.1721 23.9048C30.9509 22.3543 29.6222 20.9415 28.3877 20.8164C27.5956 19.7522 26.1875 19.4949 25.0566 19.9998C24.2088 19.1262 23.1458 18.8511 22.0097 19.1843C22.1361 16.17 22.0812 12.8394 21.855 10.4423C21.723 8.78669 20.1062 7.56719 18.5282 8.05154C17.5009 8.34997 16.7381 9.31067 16.6307 10.4423C16.3902 12.9968 16.3507 16.566 16.4975 19.6282C15.3389 21.1835 14.6173 22.6111 14.2215 23.9048H4.7896C4.09675 23.9048 3.53277 23.3439 3.53277 22.6548V3.90479C3.53277 3.2157 4.09675 2.65479 4.7896 2.65479H31.183C31.8759 2.65479 32.4399 3.2157 32.4399 3.90479V22.6548Z"
          fill="#170A33"
        />
        <path
          d="M16.2784 6.12479C15.1431 6.94572 14.4042 8.20792 14.2508 9.5867C14.2127 9.92972 14.4619 10.2386 14.8068 10.2764C15.1456 10.3149 15.4634 10.0678 15.5002 9.72342C15.6144 8.69376 16.1673 7.75016 17.0173 7.13553C17.6798 6.65303 16.9448 5.64645 16.2784 6.12479ZM15.3591 5.23917C16.0008 4.73313 15.2304 3.75325 14.5809 4.25775C13.2339 5.31302 12.2821 6.80289 11.9003 8.45267C11.8056 8.83745 12.1157 9.22225 12.5134 9.21744C12.7994 9.21744 13.0584 9.02152 13.1253 8.73222C13.4425 7.35953 14.236 6.1193 15.3591 5.23917Z"
          fill="#E6F3FF"
        />
        <path
          d="M38.0955 5.77994H36.2103C35.3848 5.79336 35.3839 7.01641 36.2103 7.02994C36.2103 7.02994 38.0955 7.02994 38.0955 7.02994C38.9211 7.01652 38.922 5.79348 38.0955 5.77994ZM35.5438 5.23062C35.7046 5.23062 35.8654 5.16959 35.9881 5.04752L37.3211 3.72184C37.8994 3.142 37.0161 2.26224 36.4324 2.83807C36.4324 2.83804 35.0995 4.16373 35.0995 4.16373C34.699 4.53492 35.0062 5.24963 35.5438 5.23062ZM35.9881 7.76237C35.4052 7.1873 34.5205 8.06554 35.0995 8.64618C35.0995 8.64616 36.4324 9.97184 36.4324 9.97184C36.6779 10.216 37.0756 10.216 37.3211 9.97184C37.5665 9.7277 37.5665 9.33219 37.3211 9.08805L35.9881 7.76237Z"
          fill="#915DFF"
        />
        <path
          d="M19.4171 37.3991C19.9488 37.3991 20.3799 36.9704 20.3799 36.4416C20.3799 35.9128 19.9488 35.4841 19.4171 35.4841C18.8854 35.4841 18.4544 35.9128 18.4544 36.4416C18.4544 36.9704 18.8854 37.3991 19.4171 37.3991Z"
          fill="#170A33"
        />
      </svg>
    );
  }
  static PickPackets({ className }) {
    return (
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.375 10.9048H4.625C3.75 10.9048 3 11.6548 3 12.5298V32.6548C3 33.5298 3.75 34.2798 4.625 34.2798H36.375C37.25 34.2798 38 33.5298 38 32.6548V12.5298C38 11.6548 37.25 10.9048 36.375 10.9048Z"
          fill="#EEF5FD"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M18.6875 10.9048V6.96729C18.6875 6.46729 18.0625 6.02979 17.25 6.02979H6.06252C5.25002 6.02979 4.62502 6.46729 4.62502 6.96729V10.9048"
          fill="#F1EBFF"
        />
        <path
          d="M18.6875 10.9048V6.96729C18.6875 6.46729 18.0625 6.02979 17.25 6.02979H6.06252C5.25002 6.02979 4.62502 6.46729 4.62502 6.96729V10.9048"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M18.6875 10.9048H4.62502"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M26.75 28.0298V31.1548H14.25V28.0298C14.25 27.4048 14.75 26.8423 15.4375 26.8423H25.5625C26.1875 26.8423 26.75 27.3423 26.75 28.0298Z"
          fill="#5B5B5B"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M30.5 24.8423V29.7798C30.5 30.5298 29.9375 31.0923 29.1875 31.0923H26.75V27.9673C26.75 27.3423 26.25 26.7798 25.5625 26.7798H15.4375C14.8125 26.7798 14.25 27.2798 14.25 27.9673V31.0923H11.8125C11.0625 31.0923 10.5 30.5298 10.5 29.7798V24.8423C10.5 24.0923 11.0625 23.5298 11.8125 23.5298H29.1875C29.875 23.5298 30.5 24.1548 30.5 24.8423Z"
          fill="#7534FF"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M14.875 18.2173V23.5298H11.875V19.5298C11.875 18.8423 12.4375 18.2798 13.125 18.2798H14.875V18.2173ZM26.0625 23.5298H29.0625V19.5298C29.0625 18.8423 28.5 18.2798 27.8125 18.2798H26.0625"
          fill="#5B5B5B"
        />
        <path
          d="M26.0625 23.5298H29.0625V19.5298C29.0625 18.8423 28.5 18.2798 27.8125 18.2798H26.0625M14.875 18.2173V23.5298H11.875V19.5298C11.875 18.8423 12.4375 18.2798 13.125 18.2798H14.875V18.2173Z"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
        <path
          d="M26.0625 15.8423V23.5298H14.875V15.8423C14.875 14.8423 15.6875 14.0298 16.6875 14.0298H24.25C25.25 14.0923 26.0625 14.9048 26.0625 15.8423Z"
          fill="#CBD8D8"
          stroke="black"
          strokeWidth="0.15625"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }
  static TargetPackets({ className }) {
    return (
      <svg
        width="41"
        height="42"
        viewBox="0 0 41 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 40.3735C31.1142 40.3735 39.7188 31.769 39.7188 21.1548C39.7188 10.5406 31.1142 1.93604 20.5 1.93604C9.88578 1.93604 1.28125 10.5406 1.28125 21.1548C1.28125 31.769 9.88578 40.3735 20.5 40.3735Z"
          fill="#7534FF"
        />
        <path
          d="M39.7188 21.1548C39.7188 26.2519 37.6939 31.1403 34.0897 34.7445C30.4855 38.3487 25.5971 40.3735 20.5 40.3735V1.93604C25.5971 1.93604 30.4855 3.96086 34.0897 7.56508C37.6939 11.1693 39.7188 16.0577 39.7188 21.1548Z"
          fill="#915DFF"
        />
        <path
          d="M20.5 36.5298C28.9914 36.5298 35.875 29.6462 35.875 21.1548C35.875 12.6634 28.9914 5.77979 20.5 5.77979C12.0086 5.77979 5.125 12.6634 5.125 21.1548C5.125 29.6462 12.0086 36.5298 20.5 36.5298Z"
          fill="#EEF5FD"
        />
        <path
          d="M35.875 21.1548C35.875 25.2325 34.2551 29.1432 31.3718 32.0266C28.4884 34.9099 24.5777 36.5298 20.5 36.5298V5.77979C24.5777 5.77979 28.4884 7.39965 31.3718 10.283C34.2551 13.1664 35.875 17.0771 35.875 21.1548Z"
          fill="#D7E2F2"
        />
        <path
          d="M20.5 27.8172C24.1796 27.8172 27.1625 24.8343 27.1625 21.1547C27.1625 17.4751 24.1796 14.4922 20.5 14.4922C16.8204 14.4922 13.8375 17.4751 13.8375 21.1547C13.8375 24.8343 16.8204 27.8172 20.5 27.8172Z"
          fill="#7534FF"
        />
        <path
          d="M27.1625 21.1547C27.1625 22.9217 26.4606 24.6163 25.2111 25.8658C23.9616 27.1152 22.267 27.8172 20.5 27.8172V14.4922C22.267 14.4922 23.9616 15.1941 25.2111 16.4436C26.4606 17.693 27.1625 19.3877 27.1625 21.1547Z"
          fill="#915DFF"
        />
        <path
          d="M29.9941 21.1549L31.6597 19.5021C31.7791 19.3826 31.8739 19.2408 31.9386 19.0847C32.0032 18.9286 32.0365 18.7613 32.0365 18.5924C32.0365 18.4235 32.0032 18.2562 31.9386 18.1001C31.8739 17.944 31.7791 17.8022 31.6597 17.6827C31.5402 17.5633 31.3984 17.4685 31.2423 17.4038C31.0862 17.3392 30.9189 17.3059 30.75 17.3059C30.5811 17.3059 30.4138 17.3392 30.2577 17.4038C30.1016 17.4685 29.9598 17.5633 29.8403 17.6827L27.6622 19.8737H20.5C20.1602 19.8737 19.8343 20.0086 19.594 20.2489C19.3537 20.4892 19.2188 20.8151 19.2188 21.1549C19.2188 21.4947 19.3537 21.8206 19.594 22.0609C19.8343 22.3012 20.1602 22.4362 20.5 22.4362H27.6622L29.8403 24.6271C29.9594 24.7472 30.1011 24.8425 30.2573 24.9075C30.4134 24.9726 30.5809 25.0061 30.75 25.0061C30.9191 25.0061 31.0866 24.9726 31.2427 24.9075C31.3989 24.8425 31.5406 24.7472 31.6597 24.6271C31.7798 24.508 31.8751 24.3663 31.9401 24.2101C32.0052 24.054 32.0387 23.8865 32.0387 23.7174C32.0387 23.5483 32.0052 23.3808 31.9401 23.2247C31.8751 23.0685 31.7798 22.9268 31.6597 22.8077L29.9941 21.1549Z"
          fill="#FCDBF4"
        />
        <path
          d="M31.6597 19.5021L29.9941 21.1549H19.2188C19.2188 20.8151 19.3537 20.4892 19.594 20.2489C19.8343 20.0086 20.1602 19.8737 20.5 19.8737H27.6622L29.8403 17.6827C30.0816 17.4414 30.4088 17.3059 30.75 17.3059C31.0912 17.3059 31.4184 17.4414 31.6597 17.6827C31.901 17.924 32.0365 18.2512 32.0365 18.5924C32.0365 18.9336 31.901 19.2608 31.6597 19.5021Z"
          fill="#AFBDD6"
        />
      </svg>
    );
  }
  static PrevArrow({ className }) {
    return (
      <svg
        className={className}
        width="32"
        height="41"
        viewBox="0 0 32 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 20.377H9M9 20.377L16 27.377M9 20.377L16 13.377"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static NextArrow({ className }) {
    return (
      <svg
        className={className}
        width="32"
        height="41"
        viewBox="0 0 32 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 20.377H23M23 20.377L16 13.377M23 20.377L16 27.377"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static ArrowRight({ className }) {
    return (
      <svg
        width="32"
        className={className}
        height="41"
        viewBox="0 0 32 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 20.377H23M23 20.377L16 13.377M23 20.377L16 27.377"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  static Rating({ className }) {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8649 3.87311C12.4796 3.20896 11.5204 3.20896 11.1351 3.87311L8.42101 8.55042C8.23064 8.87851 7.90159 9.1024 7.52653 9.15905L2.44021 9.92727C1.58593 10.0563 1.28627 11.1349 1.95158 11.6861L5.74067 14.8253C6.09141 15.1159 6.25633 15.5743 6.17113 16.0217L5.17996 21.2269C5.02327 22.0497 5.88706 22.689 6.62821 22.2988L11.4176 19.7769C11.7821 19.585 12.2178 19.585 12.5824 19.7769L17.3718 22.2988C18.1129 22.689 18.9767 22.0497 18.82 21.2269L17.8289 16.0217C17.7437 15.5743 17.9086 15.1159 18.2593 14.8253L22.0484 11.6861C22.7137 11.1349 22.4141 10.0563 21.5598 9.92727L16.4735 9.15905C16.0984 9.1024 15.7694 8.87851 15.579 8.55042L12.8649 3.87311Z"
          fill="#FF8800"
        />
      </svg>
    );
  }
  static Hamburger({ className }) {
    return (
      <svg
        width="24"
        height="24"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.00001 18C3.86797 18.003 3.73672 17.979 3.61429 17.9295C3.49186 17.88 3.38083 17.8059 3.28801 17.712C3.19406 17.6192 3.12006 17.5082 3.07053 17.3857C3.02101 17.2633 2.99701 17.132 3.00001 17C3.00001 16.7173 3.09601 16.48 3.28801 16.288C3.38083 16.1941 3.49186 16.1201 3.61429 16.0705C3.73672 16.021 3.86797 15.997 4.00001 16H15C15.2833 16 15.521 16.096 15.713 16.288C15.8068 16.3809 15.8806 16.492 15.9299 16.6144C15.9793 16.7368 16.0031 16.868 16 17C16 17.2827 15.9043 17.52 15.713 17.712C15.6201 17.8061 15.5089 17.8801 15.3863 17.9297C15.2636 17.9792 15.1322 18.0031 15 18H4.00001Z"
          fill="#915DFF"
        />
        <path
          opacity="0.3"
          d="M17.4 12L20.3 14.9C20.3911 14.9918 20.4624 15.1013 20.5097 15.2216C20.557 15.342 20.5792 15.4707 20.575 15.6C20.5792 15.7293 20.557 15.858 20.5097 15.9784C20.4624 16.0987 20.3911 16.2082 20.3 16.3C20.2082 16.3911 20.0987 16.4624 19.9784 16.5097C19.858 16.557 19.7293 16.5792 19.6 16.575C19.4708 16.5792 19.342 16.557 19.2216 16.5097C19.1013 16.4624 18.9918 16.3911 18.9 16.3L15.3 12.7C15.2049 12.61 15.1292 12.5014 15.0776 12.381C15.026 12.2606 14.9996 12.131 15 12C15 11.7333 15.1 11.5 15.3 11.3L18.9 7.7C18.9918 7.60893 19.1013 7.53757 19.2216 7.49028C19.342 7.44299 19.4708 7.42078 19.6 7.425C19.8833 7.425 20.1167 7.51667 20.3 7.7C20.3911 7.79182 20.4624 7.90126 20.5097 8.02163C20.557 8.142 20.5792 8.27075 20.575 8.4C20.5792 8.52925 20.557 8.65801 20.5097 8.77837C20.4624 8.89874 20.3911 9.00818 20.3 9.1L17.4 12Z"
          fill="#915DFF"
        />
        <path
          d="M4.00003 8C3.86807 8.00313 3.73685 7.97928 3.61443 7.92993C3.492 7.88058 3.38093 7.80677 3.28803 7.713C3.19396 7.62006 3.11988 7.50887 3.07036 7.38626C3.02083 7.26365 2.9969 7.1322 3.00003 7C3.00003 6.71667 3.09603 6.479 3.28803 6.287C3.38093 6.19324 3.492 6.11942 3.61443 6.07007C3.73685 6.02072 3.86807 5.99688 4.00003 6H15C15.1322 5.99674 15.2636 6.02052 15.3862 6.06987C15.5088 6.11922 15.62 6.19311 15.713 6.287C15.8069 6.38002 15.8808 6.49125 15.9302 6.61386C15.9795 6.73647 16.0033 6.86787 16 7C16.0033 7.13213 15.9795 7.26353 15.9302 7.38614C15.8808 7.50875 15.8069 7.61998 15.713 7.713C15.62 7.80689 15.5088 7.88078 15.3862 7.93013C15.2636 7.97949 15.1322 8.00326 15 8H4.00003Z"
          fill="#915DFF"
        />
        <path
          opacity="0.3"
          d="M4.00001 13C3.86797 13.003 3.73672 12.979 3.61429 12.9295C3.49186 12.8799 3.38083 12.8059 3.28801 12.712C3.19406 12.6192 3.12006 12.5081 3.07053 12.3857C3.02101 12.2633 2.99701 12.132 3.00001 12C3.00001 11.7167 3.09601 11.479 3.28801 11.287C3.38091 11.1932 3.49198 11.1194 3.61441 11.0701C3.73683 11.0207 3.86804 10.9969 4.00001 11H12C12.1321 10.9967 12.2635 11.0205 12.3861 11.0699C12.5088 11.1192 12.62 11.1931 12.713 11.287C12.8069 11.38 12.8808 11.4913 12.9301 11.6139C12.9795 11.7365 13.0033 11.8679 13 12C13 12.2827 12.9043 12.52 12.713 12.712C12.6201 12.8061 12.5089 12.8801 12.3863 12.9297C12.2636 12.9792 12.1322 13.0031 12 13H4.00001Z"
          fill="#915DFF"
        />
      </svg>
    );
  }
}
