type Props = {
  className?: string;
};

export function TopCenterDecore({ className }: Props): JSX.Element {
  return (
    <svg
      className={className}
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.5 0L60.3293 34.6707L95 47.5L60.3293 60.3293L47.5 95L34.6707 60.3293L0 47.5L34.6707 34.6707L47.5 0Z"
        fill="#F5E5C0"
      />
    </svg>
  );
}
