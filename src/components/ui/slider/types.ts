import { KeenSliderHooks, KeenSliderInstance } from "keen-slider/react";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from "react";
import { sliderTheme } from "./theme";
import { ArrowsSettings, IKeenSliderOptions } from "@/types";

export interface ISlider {
  sliderSettings: IKeenSliderOptions;
  children: ReactNode;
  className?: string;
  sliderClassName?: string;
  variant?: keyof typeof sliderTheme;
  onCurrentSlideChange?: (currentSlide: number) => void;
  arrowIconNext?: ReactNode;
  arrowIconPrev?: ReactNode;
}

export interface SliderArrowsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  arrowsSettings?: ArrowsSettings;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant: keyof typeof sliderTheme;
  prev?: boolean;
  next?: boolean;
  arrowIconNext?: ReactNode;
  arrowIconPrev?: ReactNode;
}

export interface SliderDotsProps {
  instanceRef: MutableRefObject<KeenSliderInstance<
    any,
    any,
    KeenSliderHooks
  > | null>;
  currentSlide: any;
  className?: string;
  variant: keyof typeof sliderTheme;
}

export interface ISharedDivProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
