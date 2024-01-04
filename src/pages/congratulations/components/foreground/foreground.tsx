import { TwoImage, ZeroImage } from "@/assets";
import ExplosionWrapper from "@/components/explosion-wrapper";
import MagnetWrapper from "@/components/magnet-wrapper";

export function Foreground(): JSX.Element {
  return (
    <div className="w-full gap-10 flex justify-center flex-col items-center">
      <span className="sr-only">Motion</span>
      <span className="block h-8 overflow-hidden" aria-hidden>
        {["M", "o", "t", "i", "o", "n"].map((letter, index) => (
          <span
            data-letter={letter}
            className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
        ))}
      </span>
      {/* TODO: выяснить лучшую практику задания box-shadow и недостающих стилей в tailwind */}
      <h1
        className="text-center text-9xl font-normal tracking-wider leading-snug max-w-4xl"
        style={{ textShadow: "6px 6px 0px rgba(209,87,42,1)" }}
      >
        Happy New&nbsp;Year
      </h1>
      <div className="grid gap-8 grid-cols-4 max-w-fit">
        <MagnetWrapper>
          <ExplosionWrapper>
            <TwoImage className="w-full cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <TwoImage className="w-full cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <ZeroImage className="w-full cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <TwoImage className="w-full cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
      </div>
    </div>
  );
}
