import { AnimatedText } from "@/components/animated-text";

export function Header(): JSX.Element {
  return (
    <AnimatedText
      el="h2"
      text={["Happy", "New Year"]}
      className="text-center text-7xl xl:text-8xl 2xl:text-9xl font-normal tracking-wider leading-snug max-w-4xl z-10"
      style={{ textShadow: "6px 6px 0px rgba(209,87,42,1)" }}
      repeatDelay={1000}
    />
  );
}
