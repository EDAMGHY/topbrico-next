import { ArtisansCard } from "./ArtisansCard";
import { artisans } from "@/lib/mock-data";

export const ArtisansList = () => {
  return (
    <div className="gap-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {artisans.map((artisan, index) => (
        <ArtisansCard key={index} {...artisan} />
      ))}
    </div>
  );
};
