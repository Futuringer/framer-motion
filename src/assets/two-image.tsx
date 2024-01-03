type Props = {
  className?: string;
};

export function TwoImage({ className }: Props): JSX.Element {
  return (
    <svg
      className={className}
      width="297"
      height="447"
      viewBox="0 0 297 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_110_2)">
        <path
          d="M142.739 3.99414C124.002 3.99414 105.449 7.68465 88.1383 14.8549C70.8277 22.0253 55.0988 32.5349 41.8498 45.7839C28.6008 59.0329 18.0912 74.7617 10.9209 92.0724C3.75056 109.383 0.0600558 127.936 0.0600586 146.673L142.739 146.673V3.99414Z"
          fill="#EFD84F"
        />
        <path
          d="M0 297.065C0 278.328 3.69052 259.775 10.8608 242.464C18.0311 225.153 28.5408 209.424 41.7898 196.175C55.0388 182.926 70.7676 172.417 88.0782 165.247C105.389 158.076 123.942 154.386 142.679 154.386L142.679 297.065L0 297.065Z"
          fill="#F5E5C0"
        />
        <path
          d="M144.17 448.044L50.8519 448.551C23.5919 448.699 1.37331 426.72 1.22523 399.46L0.718324 306.139L94.0369 305.632C121.297 305.484 143.515 327.463 143.664 354.723L144.17 448.044Z"
          fill="#7384B3"
        />
        <path
          d="M297 447.5C297 428.524 293.262 409.734 286.001 392.202C278.739 374.671 268.095 358.741 254.677 345.323C241.259 331.905 225.329 321.261 207.798 313.999C190.266 306.738 171.476 303 152.5 303L152.5 447.5H297Z"
          fill="#CF5629"
        />
        <path
          d="M150.453 3.00003C189.316 3.00003 226.587 18.4385 254.067 45.9193C281.547 73.4 296.985 110.672 296.985 149.535C296.985 188.399 281.547 225.671 254.067 253.152C226.587 280.632 189.316 296.071 150.453 296.071L150.453 149.535L150.453 3.00003Z"
          fill="#7DB890"
        />
      </g>
      <defs>
        <clipPath id="clip0_110_2">
          <rect width="297" height="447" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
