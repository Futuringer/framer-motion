type Props = {
  className?: string;
};

export function FourImage({ className }: Props): JSX.Element {
  return (
    <svg
      className={className}
      width="339"
      height="451"
      viewBox="0 0 339 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.298737 149.5C0.29874 187.511 17.407 223.965 47.8598 250.842C78.3127 277.72 119.616 292.82 162.682 292.82L162.682 149.5L0.298737 149.5Z"
        fill="#F5E5C0"
      />
      <path
        d="M339 144C339 106.074 321.405 69.7014 290.087 42.8837C258.768 16.066 216.291 1 172 0.999996L172 144L339 144Z"
        fill="#7DB890"
      />
      <path
        d="M163.263 143.321L50.2408 143.862C22.9807 143.993 0.746053 122.001 0.578286 94.7407L5.46621e-06 0.778476L113.023 0.236628C140.283 0.105939 162.517 22.0985 162.685 49.3584L163.263 143.321Z"
        fill="#EFD84F"
      />
      <path
        d="M172 298L289.641 298C316.901 298 339 275.901 339 248.641L339 150L221.359 150C194.099 150 172 172.099 172 199.359L172 298Z"
        fill="#CF5629"
      />
      <ellipse
        cx="83.5"
        cy="73.5"
        rx="83.5"
        ry="73.5"
        transform="matrix(-1 0 0 1 339 304)"
        fill="#CF5629"
      />
      <rect
        width="167"
        height="147"
        transform="matrix(-1 0 0 1 339 224)"
        fill="#CF5629"
      />
    </svg>
  );
}
