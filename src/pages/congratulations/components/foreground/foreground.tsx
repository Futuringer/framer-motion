import { TwoImage, ZeroImage } from "@/assets";
import MagnetWrapper from "@/components/magnet-wrapper";

export function Foreground(): JSX.Element {
  return (
    <div className="grid grid-cols-4 w-3/4">
      <MagnetWrapper>
        <TwoImage className="w-32 cursor-pointer" />
      </MagnetWrapper>
      <MagnetWrapper>
        <TwoImage className="w-32 cursor-pointer" />
      </MagnetWrapper>
      <MagnetWrapper>
        <ZeroImage className="w-40 cursor-pointer" />
      </MagnetWrapper>
      <MagnetWrapper>
        <TwoImage className="w-32 cursor-pointer" />
      </MagnetWrapper>
    </div>
  );
}
