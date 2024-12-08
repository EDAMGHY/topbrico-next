import { featuredArtisans } from "@/lib/mock-data";
import { IntroductionSection } from "./IntroductionSection";
import { FeaturedArtisan } from "./FeaturedArtisan";

export const FeaturedArtisans = () => {
  const highlighted = featuredArtisans[0];
  return (
    <section className="space-y-5">
      <IntroductionSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {highlighted && <FeaturedArtisan {...highlighted} />}
        <div className="grid grid-cols-2 gap-4">
          {featuredArtisans
            .filter((item) => !item.highlighted)
            .map((artisan, idx) => (
              <FeaturedArtisan key={idx} {...artisan} />
            ))}
        </div>
      </div>
    </section>
  );
};
