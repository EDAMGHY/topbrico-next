import { cn } from "@/lib/utils";
import { ISharedDivProps } from "./types";

export const SliderThumbs = ({
  children,
  className = "",
  ...props
}: ISharedDivProps) => {
  return (
    <div
      className={cn("keen-slider__slide keen-slider__thumbs", className)}
      {...props}
    >
      {children}
    </div>
  );
};
