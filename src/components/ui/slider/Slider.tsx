"use client";

import { useState, useEffect } from "react";
import { KeenSliderOptions, useKeenSlider } from "keen-slider/react";

import { SliderArrows } from "./slider--arrows";
import { SliderDots } from "./slider--dots";

import { sliderTheme } from "./theme";

import "keen-slider/keen-slider.min.css";

import { cn } from "@/lib/utils";
import { ISlider } from "./types";

export const Slider = ({
  sliderSettings,
  children,
  className = "",
  sliderClassName = "",
  variant = "default",
  onCurrentSlideChange,
  arrowIconNext,
  arrowIconPrev,
}: ISlider) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  //   const isRTLDirection = useRTLDirection();

  //   let defaultSliderPlugins = defaultSliderPluginFun(sliderPlugins);

  const defaultSliderSettings: KeenSliderOptions = {
    rtl: false,
    loop: true,
    disabled: false,
    initial: 0,
    slides: {
      origin: "auto",
      number: null,
      perView: 1,
      spacing: 16,
    },
    mode: "snap",
    rubberband: true,
    renderMode: "precision",
    defaultAnimation: { duration: 500 },
    vertical: false,
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          origin: "auto",
          number: null,
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 992px)": {
        slides: {
          origin: "auto",
          number: null,
          perView: 3,
          spacing: 20,
        },
      },
    },
    slideChanged(slider: any) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    ...sliderSettings,
  };

  const arrowsSettings = {
    hideArrowMobile: sliderSettings?.arrows?.hideArrowMobile || false,
    hideArrowTablet: sliderSettings?.arrows?.hideArrowTablet || false,
    hideArrowDesktop: sliderSettings?.arrows?.hideArrowDesktop || false,
  };

  const [sliderRef, instanceRef] = useKeenSlider(
    defaultSliderSettings
    // defaultSliderPlugins
  );

  useEffect(() => {
    if (typeof onCurrentSlideChange === "function") {
      onCurrentSlideChange(currentSlide);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  // const perView = instanceRef.current?.options?.slides?.perView
  // const slides = instanceRef.current?.slides.length

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [sliderRef, instanceRef, loaded]);

  return (
    <div
      className={cn("relative", sliderTheme[variant].wrapper, sliderClassName)}
    >
      <div
        className={cn(
          "absolute inset-0 z-[50] flex h-full w-full items-center justify-center rounded bg-black/10",
          !loaded ? "z-1 opacity-100" : "-z-[1] opacity-0"
        )}
      >
        Loading...{" "}
      </div>
      <div
        ref={sliderRef}
        className={cn(
          "keen-slider",
          loaded ? "z-[1]" : "-z-[1]",
          sliderTheme[variant].slider,
          className
        )}
      >
        {children}
      </div>

      {loaded && instanceRef.current && (
        <SliderDots
          instanceRef={instanceRef}
          currentSlide={currentSlide}
          variant={variant}
        />
      )}

      {loaded && instanceRef.current && (
        <>
          <SliderArrows
            prev
            arrowsSettings={arrowsSettings}
            onClick={() => instanceRef.current?.prev()}
            variant={variant}
            arrowIconPrev={arrowIconPrev}
          />

          <SliderArrows
            next
            arrowsSettings={arrowsSettings}
            onClick={() => instanceRef.current?.next()}
            variant={variant}
            arrowIconNext={arrowIconNext}
          />
        </>
      )}
    </div>
  );
};
