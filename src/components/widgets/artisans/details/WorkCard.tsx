import { cn } from "@/lib/utils";
import { IWork } from "@/types";
import Image from "next/image";
import React from "react";

export const WorkCard = ({
  description,
  name,
  url,
  thumbnail = false,
}: IWork & { thumbnail?: boolean }) => {
  return (
    <div className={cn("keen-slider__slide")}>
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image src={url} fill alt={name} className="object-cover" />
      </div>
      {!thumbnail && (
        <div className={cn("space-y-2", thumbnail ? "py-2" : " py-4")}>
          <h3 className={cn("text-xl leading-7 font-bold")}>{name}</h3>
          <p className="text-sm leading-6">{description}</p>
        </div>
      )}
    </div>
  );
};
