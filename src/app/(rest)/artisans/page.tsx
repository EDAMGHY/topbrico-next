import { artisans } from "@/lib/mock-data";
import {
  Banner,
  Filters,
  SearchSection,
  ArtisansList,
  SortingSection,
} from "@/widgets";
import { HardHat } from "lucide-react";

const ArtisansPage = () => {
  const props = {
    title: "Artisans Section",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
    icon: <HardHat size={60} className="shrink-0" />,
  };
  return (
    <section className="space-y-8 my-8">
      <Banner {...props} />
      <SearchSection />
      <div className="flex items-start justify-start md:flex-row flex-col mdDown:gap-8 gap-8">
        <Filters />
        <div className="w-full space-y-8">
          <SortingSection length={artisans.length} />
          <ArtisansList />
        </div>
      </div>
    </section>
  );
};

export default ArtisansPage;
