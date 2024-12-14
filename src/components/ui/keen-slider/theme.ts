export const sliderTheme = {
  default: {
    wrapper: "relative",
    slider: "",
    arrows: {
      wrapper: "",
      button:
        "inline-flex justify-center items-center w-4 h-4 text-black hover:text-gray-500 transition absolute -bottom-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 bg-transparent bg-white",
      prev: "left-0 border border-secondary-500 inline-flex justify-center items-center size-8 rounded-full",
      next: "right-0 border border-secondary-500 inline-flex justify-center items-center size-8 rounded-full",
    },
    dots: {
      wrapper:
        "flex items-center justify-center absolute bottom-0 bg-gradient-to-t from-[rgba(255,255,255,0.7)] dark:from-[rgba(0,0,0,0.7)] pb-4 to-transparent left-0 right-0 z-[3]",
      dot: "dot inline-block w-7 h-2 cursor-pointer my-0 mx-1 bg-transparent",
      dotNotActive: "bg-white",
      dotActive: "active bg-orange-500 w-12",
    },
  },
  full: {
    wrapper: "relative mb-8",
    slider: "",
    arrows: {
      wrapper: "",
      button:
        "inline-flex justify-center items-center w-4 h-4 text-black hover:text-gray-500 transition absolute -bottom-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 bg-transparent",
      prev: "left-0",
      next: "right-0",
    },
    dots: {
      wrapper:
        "flex items-center justify-center absolute md:-bottom-8 -bottom-4 left-0 right-0",
      dot: "dot inline-block w-3 h-3 cursor-pointer rounded-full my-0 mx-2 bg-transparent",
      dotNotActive: "bg-primary-100",
      dotActive: "active bg-secondary-500 w-14 h-3",
    },
  },
  fullBackground: {
    wrapper: "relative",
    slider: "",
    arrows: {
      wrapper: "",
      button:
        "bg-transparent group absolute z-50 items-center justify-center hidden w-11 h-11 transform -translate-y-1/2 border-2 border-gray-500 border-opacity-50 hover:border-transparent rounded-full md:flex top-1/2 transition-all hover:bg-black hover:bg-opacity-70 before:transition-all before:absolute before:content-[''] before:w-full before:border-b-2 before:border-white hover:before:w-2/6",
      prev: "left-5 before:left-1/2 hover:before:left-4",
      next: "right-5 before:right-1/2 hover:before:right-4",
    },
    dots: {
      wrapper:
        "absolute flex items-center transform -translate-x-1/2 bottom-6 left-1/2 rtl:translate-x-1/2 gap-x-4",
      dot: "dot rounded-full",
      dotNotActive: "bg-white w-4 h-4",
      dotActive: "active bg-gray-400 w-6 h-6",
    },
  },
  sliderImageBgVideo: {
    wrapper: "relative",
    slider: "",
    arrows: {
      wrapper: "",
      button:
        "bg-transparent group absolute z-50 items-center justify-center hidden w-11 h-11 transform -translate-y-1/2 border-2 border-gray-500 border-opacity-50 hover:border-transparent rounded-full md:flex top-1/2 transition-all hover:bg-black hover:bg-opacity-70 before:transition-all before:absolute before:content-[''] before:w-full before:border-b-2 before:border-white hover:before:w-2/6",
      prev: "left-5 before:left-1/2 hover:before:left-4",
      next: "right-5 before:right-1/2 hover:before:right-4",
    },
    dots: {
      wrapper: "absolute flex items-center bottom-5 right-5 gap-x-4",
      dot: "rounded-full w-4 h-4",
      dotNotActive: "bg-gray-200",
      dotActive: "active bg-primary-500",
    },
  },
  // cards aside wip
  cardsAside: {
    wrapper: "relative",
    slider: "ms-12",
    arrows: {
      wrapper: "",
      button: "absolute",
      prev: "top-0",
      next: "top-10",
    },
    dots: {
      wrapper: "",
      dot: "",
      dotNotActive: "",
      dotActive: "",
    },
  },
};
