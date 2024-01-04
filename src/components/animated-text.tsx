import { motion, useAnimation, Variant } from "framer-motion";
import { CSSProperties, useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  style?: CSSProperties;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const AnimatedText = ({
  text,
  style,
  el: Wrapper = "p",
  className,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const intRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const paintText = async () => {
    await controls.start("hidden");
    controls.start("visible");
  };

  const handleClick = () => {
    if (intRef) {
      clearInterval(intRef.current!);
      paintText();
      intRef.current = setInterval(() => {
        paintText();
      }, 10000);
    }
  };

  useEffect(() => {
    if (intRef) {
      intRef.current = setInterval(() => {
        paintText();
      }, 10000);
    }

    return () => {
      if (intRef) {
        clearInterval(intRef.current!);
      }
    };
  }, []);

  return (
    <Wrapper className={className} style={style} onClick={handleClick}>
      <motion.span
        ref={ref}
        initial="visible"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block cursor-pointer"
                    variants={animation}
                    whileHover={{ scale: 1.3 }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
