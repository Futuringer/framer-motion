import { PropsWithChildren } from "react";

import { BottomArc, BottomDecore, SideDecore, TopCenterDecore } from "@/assets";

export function BackgroundLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="flex w-full h-full">
      <div className="absolute px-16 top-0 flex w-full justify-between items-start">
        <SideDecore className="-scale-x-100" />
        <TopCenterDecore className="relative top-8" />
        <SideDecore />
      </div>
      <div className="absolute bottom-0 flex w-full justify-between items-end">
        <BottomDecore />
        <BottomArc />
        <BottomDecore className="-scale-x-100" />
      </div>
      {children}
    </div>
  );
}
