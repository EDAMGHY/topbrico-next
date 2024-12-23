import { BackgroundSnippet, Footer, Navbar } from "@/layout";
import {
  HeroSection,
  ContactUsSection,
  FeaturedArtisans,
  ServicesSection,
  TestimonialsSection,
} from "@/widgets";

export default function Home() {
  return (
    <>
      <Navbar />
      <BackgroundSnippet />
      <main className="container space-y-5 md:space-y-10 mb-5 md:mb-10">
        <HeroSection />
        <ServicesSection />
        <FeaturedArtisans />
        <TestimonialsSection />
        <ContactUsSection />
      </main>
      <Footer />
    </>
  );
}
