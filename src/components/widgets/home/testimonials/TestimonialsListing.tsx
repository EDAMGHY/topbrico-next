"use client";

import { testimonials } from "@/lib/mock-data";
import { TestimonialCard } from "./TestimonialCard";
import { CurrentItem } from "./CurrentItem";
import { useEffect, useState } from "react";
import { ITestimonial } from "@/types";
import { useLoopArray } from "@/hooks";

export const TestimonialsListing = () => {
  const [currentItem, setCurrentItem] = useState<ITestimonial>(testimonials[0]);
  const [currentLoopItem, currentIndex] = useLoopArray(testimonials, 5000);

  useEffect(() => {
    setCurrentItem(currentLoopItem);
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-x-2 no-scrollbar md:space-y-2 md:block flex justify-start items-center overflow-x-auto snap-mandatory snap-x">
        {testimonials?.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            onSelect={setCurrentItem}
            active={currentItem.id === testimonial.id}
            {...testimonial}
          />
        ))}
      </div>
      <CurrentItem item={currentItem} />
    </div>
  );
};
