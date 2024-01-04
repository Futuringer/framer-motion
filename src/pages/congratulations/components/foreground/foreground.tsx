import { FourImage, TwoImage, ZeroImage } from "@/assets";
import ExplosionWrapper from "@/components/explosion-wrapper";
import MagnetWrapper from "@/components/magnet-wrapper";

import { Header } from "../header/header";

export function Foreground(): JSX.Element {
  return (
    <div className="w-full gap-12 flex justify-center flex-col items-center overflow-hidden">
      <Header />
      <div className="grid w-2/3 gap-8 grid-cols-4 max-w-fit">
        <MagnetWrapper>
          <ExplosionWrapper>
            <TwoImage className="w-full h-1/2 cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <TwoImage className="w-full h-1/2 cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <ZeroImage className="w-full h-1/2 cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
        <MagnetWrapper>
          <ExplosionWrapper>
            <FourImage className="w-full h-1/2 cursor-pointer" />
          </ExplosionWrapper>
        </MagnetWrapper>
      </div>
    </div>
  );
}
