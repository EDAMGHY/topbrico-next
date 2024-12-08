import { IntroductionSection } from "./IntroductionSection";
import { TestimonialsListing } from "./TestimonialsListing";

export const TestimonialsSection = () => {
  return (
    <section className="space-y-4">
      <IntroductionSection />
      <TestimonialsListing />
    </section>
  );
};
