type Props = {
  className?: string;
};

export function BottomDecore({ className }: Props): JSX.Element {
  return (
    <svg
      className={className}
      width="179"
      height="151"
      viewBox="0 0 179 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.739 157.024L0.952549 167.147L22.0479 186.853L30.3929 160.437L26.739 157.024ZM152.261 29.9757L178.047 19.8529L156.952 0.147109L148.607 26.5626L152.261 29.9757ZM28.6863 162.264L91.3268 95.2066L87.673 91.7934L25.0325 158.851L28.6863 162.264ZM91.3268 95.2066L153.967 28.1488L150.313 24.7357L87.673 91.7934L91.3268 95.2066Z"
        fill="#7384B3"
      />
    </svg>
  );
}
