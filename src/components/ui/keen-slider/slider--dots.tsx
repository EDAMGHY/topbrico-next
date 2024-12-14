import { sliderTheme } from "./theme";
import { cn } from "@/lib/utils";
import { SliderDotsProps } from "./types";

export const SliderDots = ({
  instanceRef,
  currentSlide,
  className,
  variant,
}: SliderDotsProps) => {
  return (
    <div className={cn("dots", sliderTheme[variant].dots.wrapper, className)}>
      {[
        ...Array.from(
          Array(instanceRef?.current?.track?.details?.slides.length).keys()
        ),
      ].map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
            aria-label="Slider navigation"
            className={cn(
              sliderTheme[variant].dots.dot,
              currentSlide == idx
                ? sliderTheme[variant].dots.dotActive
                : sliderTheme[variant].dots.dotNotActive
            )}
          />
        );
      })}
    </div>
  );
};
