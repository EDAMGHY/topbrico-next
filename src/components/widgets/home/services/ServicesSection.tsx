import { IntroductionSection } from "./IntroductionSection";
import { SliderListing } from "./SliderListing";

export const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 overflow-hidden">
      <IntroductionSection />
      <SliderListing />
    </div>
  );
};
