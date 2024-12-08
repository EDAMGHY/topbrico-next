import { cn } from "@/lib/utils";
import { ISharedDivProps } from "./types";

export const SliderItem = ({
  children,
  className = "",
  ...props
}: ISharedDivProps) => {
  return (
    <div className={cn("keen-slider__slide", className)} {...props}>
      {children}
    </div>
  );
};
