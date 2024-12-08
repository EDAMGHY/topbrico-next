import { IFeaturedArtisan, IKeenSliderOptions } from "@/types";
import Image from "next/image";
import { Slider, SliderItem } from "@/ui";

export const FeaturedArtisan = ({
  images = [],
  name,
  description,
}: IFeaturedArtisan) => {
  const sliderSettings: IKeenSliderOptions = {
    loop: true,
    slides: {
      origin: "auto",
      number: null,
      perView: 1,
      spacing: 10,
    },
    mode: "snap",
    arrows: {
      hideArrowDesktop: true,
      hideArrowMobile: true,
      hideArrowTablet: true,
    },
    breakpoints: {},
  };

  return (
    <div className="space-y-2">
      <Slider sliderSettings={sliderSettings}>
        {images.map((image, idx) => (
          <SliderItem key={idx}>
            <div className="relative aspect-square shrink-0 size-full">
              <Image src={image.url} alt={name} fill className="object-cover" />
            </div>
          </SliderItem>
        ))}
      </Slider>

      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{description.substring(0, 80)}</p>
      </div>
    </div>
  );
};
