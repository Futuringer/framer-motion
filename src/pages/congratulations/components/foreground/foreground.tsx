import { TwoImage, ZeroImage } from "@/assets";
import MagnetWrapper from "@/components/magnet-wrapper";

export function Foreground(): JSX.Element {
  return (
    <div className="w-full gap-10 flex justify-center flex-col items-center">
      {/* TODO: выяснить лучшую практику задания box-shadow и недостающих стилей в tailwind */}
      <h1
        className="text-center text-9xl font-normal tracking-wider leading-snug max-w-4xl"
        style={{ textShadow: "6px 6px 0px rgba(209,87,42,1)" }}
      >
        Happy New&nbsp;Year
      </h1>
      <div className="grid grid-cols-4 max-w-fit">
        <MagnetWrapper>
          <TwoImage className="w-full cursor-pointer" />
        </MagnetWrapper>
        <MagnetWrapper>
          <TwoImage className="w-full cursor-pointer" />
        </MagnetWrapper>
        <MagnetWrapper>
          <ZeroImage className="w-full cursor-pointer" />
        </MagnetWrapper>
        <MagnetWrapper>
          <TwoImage className="w-full cursor-pointer" />
        </MagnetWrapper>
      </div>
    </div>
  );
}
