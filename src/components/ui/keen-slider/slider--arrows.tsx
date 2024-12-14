import { forwardRef } from "react";
import { sliderTheme } from "./theme";
import { SliderArrowsProps } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IconPrev = () => <ChevronLeft className="size-4 text-blue-500" />;

const IconNext = () => <ChevronRight className="size-4 text-blue-500" />;

export const SliderArrows = forwardRef<HTMLButtonElement, SliderArrowsProps>(
  (
    {
      arrowsSettings,
      onClick,
      className = "",
      variant,
      prev,
      next,
      arrowIconNext = <IconNext />,
      arrowIconPrev = <IconPrev />,
      ...props
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={cn(
          className,
          "rtl-icon",
          sliderTheme[variant].arrows.button,
          prev && sliderTheme[variant].arrows.prev,
          next && sliderTheme[variant].arrows.next,
          arrowsSettings?.hideArrowMobile ? "onlyMobile:hidden" : null,
          arrowsSettings?.hideArrowTablet ? "onlyTablet:hidden" : null,
          arrowsSettings?.hideArrowDesktop ? "onlyDesktop:hidden" : null
        )}
        aria-label="navigation arrow"
        {...props}
      >
        {prev && arrowIconPrev}
        {next && arrowIconNext}
      </button>
    );
  }
);
