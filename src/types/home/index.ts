import { KeenSliderOptions } from "keen-slider/react";

export interface ICategory {
  name: string;
  icon: any;
  description: string;
}

export type IImageArtisan = { url: string; name: string };
export interface IFeaturedArtisan {
  name: string;
  description: string;
  images: IImageArtisan[];
  highlighted?: boolean;
  link: string;
}

export type ArrowsSettings = {
  hideArrowMobile?: boolean;
  hideArrowDesktop?: boolean;
  hideArrowTablet?: boolean;
};

export type IKeenSliderOptions = KeenSliderOptions & {
  arrows?: ArrowsSettings;
};

export interface ITestimonial {
  id: number;
  author: string;
  picture: string;
  profession: string;
  rating: number;
  content: string;
}
