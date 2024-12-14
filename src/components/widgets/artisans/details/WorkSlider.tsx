"use client";

import { WorkCard } from "./WorkCard";
import { MutableRefObject, useState } from "react";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import { IWork } from "@/types";
import { cn } from "@/lib/utils";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export const WorkSlider = ({ nodes = [] }: { nodes: IWork[] }) => {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      created() {
        setLoaded(true);
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="relative">
      <h2 className="text-3xl mb-5 font-bold leading-10">My Work : </h2>
      {!loaded && (
        <div className="absolute inset-0 z-[10] flex justify-center items-center">
          Loading...
        </div>
      )}
      <div className={cn(!loaded && "opacity-0")}>
        <div ref={sliderRef} className="keen-slider">
          {nodes.map((item, index) => (
            <WorkCard key={index} {...{ ...item, idx: index }} />
          ))}
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {nodes.map((item, index) => (
            <WorkCard thumbnail key={index} {...{ ...item, idx: index }} />
          ))}
        </div>
      </div>
    </div>
  );
};
