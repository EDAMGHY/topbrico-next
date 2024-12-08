import { Search } from "lucide-react";
import { generateRandomDimensions } from "./utils";

export const mainMenu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "About",
    link: "/about",
  },
];

export const categories = [
  {
    name: "Category 1",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 2",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 3",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 4",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 5",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 6",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 7",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 8",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 9",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
  {
    name: "Category 10",
    icon: Search,
    description: "lorem ipsum dolor sit amet consectetur",
  },
];

export const featuredArtisans = [
  {
    name: "Artisan 1",
    images: [
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 1",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 2",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 3",
      },
    ],
    description:
      "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    link: "/artisan/1",
    highlighted: true,
  },
  {
    name: "Artisan 2",
    images: [
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 1",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 2",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 3",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 4",
      },
    ],
    description:
      "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    link: "/artisan/2",
    highlighted: false,
  },
  {
    name: "Artisan 3",
    images: [
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 1",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 2",
      },
    ],
    description:
      "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    link: "/artisan/3",
    highlighted: false,
  },
  {
    name: "Artisan 4",
    images: [
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 1",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 2",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 3",
      },
    ],
    description:
      "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    link: "/artisan/4",
    highlighted: false,
  },
  {
    name: "Artisan 5",
    images: [
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 1",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 2",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 3",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 4",
      },
      {
        url: `https://picsum.photos/${generateRandomDimensions()}`,
        name: "Work 5",
      },
    ],
    description:
      "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    link: "/artisan/5",
    highlighted: false,
  },
];

export const testimonials = [
  {
    id: 1,
    author: "John Doe",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    profession: "Web Developer",
    rating: 2.1,
    content:
      "I couldn't be more satisfied with the service! From the moment I made my inquiry, the team was incredibly professional and attentive to my needs. They went above and beyond to ensure that every detail was perfect. The final result exceeded my expectations, both in quality and timeliness. I highly recommend them to anyone looking for top-notch work. Trust me, you won't regret it!",
  },
  {
    id: 2,
    author: "Mary Smith",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    profession: "UI/UX Designer",
    rating: 3.7,
    content:
      "This has been one of the best experiences I’ve had working with a service provider. The communication was seamless, and they kept me updated every step of the way. They were able to take my vague ideas and turn them into something amazing. The level of care and attention to detail was impressive. I’ll definitely be coming back for future projects!",
  },
  {
    id: 3,
    author: "Eren Yeager",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    profession: "CEO of Survey Corps",
    rating: 1.7,
    content:
      "I was hesitant at first, but their stellar reviews convinced me to give it a try. I’m so glad I did because they delivered beyond my expectations! The team listened carefully to my requirements and executed flawlessly. Their creativity and expertise truly shined through in the final product. It's rare to find this kind of commitment to customer satisfaction. I highly recommend their services!",
  },
  {
    id: 4,
    author: "Joseph Joestar",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    profession: "Real Estate Agent",
    rating: 4.8,
    content:
      "Outstanding service from start to finish! They took the time to understand my specific needs and crafted a solution that was both practical and innovative. Their team was friendly, approachable, and incredibly skilled. The turnaround time was much quicker than I anticipated, without compromising on quality. I couldn’t be happier with the results. A huge thank you to the entire team!",
  },
  {
    id: 5,
    author: "Dexter Morgan",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    profession: "Forensic Analyst",
    rating: 4.0,
    content:
      "I’ve worked with several companies in the past, but this one stands out as exceptional. From the first interaction, I felt like a valued customer. Their dedication to ensuring my satisfaction was evident in every step of the process. The quality of their work is second to none, and the price was very reasonable. They’ve gained a lifelong customer in me. I’ll definitely be spreading the word!",
  },
];
