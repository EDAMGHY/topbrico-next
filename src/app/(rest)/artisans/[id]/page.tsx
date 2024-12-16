import { artisans } from "@/lib/mock-data";
import { ArtisanDetails, Banner, NotFoundBlock, ReviewsList } from "@/widgets";
import { HardHat } from "lucide-react";

const ArtisansDetails = ({ params: { id } }: { params: { id: string } }) => {
  //call api
  const artisan = artisans.find((art) => art.id === +id);

  const props = {
    title: artisan ? artisan?.fullName + " Section" : "Artisan Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
    icon: <HardHat size={60} className="shrink-0" />,
  };

  return (
    <section className="space-y-8 py-8">
      <Banner {...props} />
      {artisan ? (
        <>
          <ArtisanDetails {...artisan} />
          <ReviewsList reviews={artisan.reviews} />
        </>
      ) : (
        <NotFoundBlock />
      )}
    </section>
  );
};

export default ArtisansDetails;
