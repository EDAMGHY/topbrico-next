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

export const filters = [
  {
    name: "Category",
    options: [
      {
        label: "Category 1",
        value: "Category 1",
      },
      {
        label: "Category 2",
        value: "Category 2",
      },
      {
        label: "Category 3",
        value: "Category 3",
      },
      {
        label: "Category 4",
        value: "Category 4",
      },
      {
        label: "Category 5",
        value: "Category 5",
      },
      {
        label: "Category 6",
        value: "Category 6",
      },
      {
        label: "Category 7",
        value: "Category 7",
      },
      {
        label: "Category 8",
        value: "Category 8",
      },
      {
        label: "Category 9",
        value: "Category 9",
      },
      {
        label: "Category 10",
        value: "Category 10",
      },
    ],
  },
  {
    name: "Rating",
    options: [
      {
        label: "5 Stars",
        value: 5,
      },
      {
        label: "4 Stars",
        value: 4,
      },
      {
        label: "3 Stars",
        value: 3,
      },
      {
        label: "2 Stars",
        value: 2,
      },
      {
        label: "1 Star",
        value: 1,
      },
    ],
  },
  {
    name: "City",
    options: [
      {
        label: "Casablanca",
        value: "Casablanca",
      },
      {
        label: "Rabat",
        value: "Rabat",
      },
      {
        label: "Marrakech",
        value: "Marrakech",
      },
      {
        label: "Agadir",
        value: "Agadir",
      },
      {
        label: "Essaouira",
        value: "Essaouira",
      },
    ],
  },
];

export const artisans = [
  {
    id: 1,
    fullName: "John Doe",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
    location: "Casablanca, Morocco",
    availability: true,
    profession: "Carpenter",
    contact: {
      email: "johndoe@gmail.com",
      phone: "+1234567890",
    },
    work: [
      {
        name: "Work 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1000, 2000)}`,
      },
      {
        name: "Work 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1001, 2001)}`,
      },
      {
        name: "Work 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1003, 2003)}`,
      },
      {
        name: "Work 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1004, 2004)}`,
      },
      {
        name: "Work 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1005, 2005)}`,
      },
      {
        name: "Work 6",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore accusamus provident sint, fugiat soluta. Hic ullam excepturi corporis harum!",
        url: `https://picsum.photos/${generateRandomDimensions(1005, 2001)}`,
      },
    ],
  },
  {
    id: 2,
    fullName: "Sarah Smith",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Sarah is an experienced tailor who creates bespoke clothing tailored to perfection. Her attention to detail is unmatched.",
    location: "Rabat, Morocco",
    availability: false,
    profession: "Tailor",
    contact: {
      email: "sarahsmith@gmail.com",
      phone: "+9876543210",
    },
    work: [
      {
        name: "Wedding Dress",
        description:
          "A stunning wedding dress designed with intricate lace details and modern elegance.",
        url: `https://picsum.photos/${generateRandomDimensions(33, 200)}`,
      },
      {
        name: "Custom Suit",
        description:
          "A sharp, tailored suit designed to make a statement at any formal event.",
        url: `https://picsum.photos/${generateRandomDimensions(40, 200)}`,
      },
    ],
  },
  {
    id: 3,
    fullName: "Ahmed Benali",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Ahmed is a skilled painter known for his vibrant murals and detailed artwork.",
    location: "Marrakech, Morocco",
    availability: true,
    profession: "Painter",
    contact: {
      email: "ahmedbenali@gmail.com",
      phone: "+212654987321",
    },
    work: [
      {
        name: "Mural 1",
        description:
          "A colorful mural depicting scenes of Moroccan culture and daily life.",
        url: `https://picsum.photos/${generateRandomDimensions(33, 200)}`,
      },
      {
        name: "Canvas Painting",
        description:
          "A detailed painting of a Moroccan landscape, capturing the beauty of nature.",
        url: `https://picsum.photos/${generateRandomDimensions(40, 200)}`,
      },
    ],
  },
  {
    id: 4,
    fullName: "Fatima Lahlou",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Fatima specializes in handcrafted pottery, blending traditional techniques with modern designs.",
    location: "Fes, Morocco",
    availability: true,
    profession: "Potter",
    contact: {
      email: "fatimalahlou@gmail.com",
      phone: "+212789654123",
    },
    work: [
      {
        name: "Ceramic Vase",
        description:
          "A beautifully handcrafted vase with intricate patterns inspired by Moroccan art.",
        url: `https://picsum.photos/${generateRandomDimensions(33, 200)}`,
      },
      {
        name: "Pottery Set",
        description:
          "A set of traditional pottery designed for everyday use and display.",
        url: `https://picsum.photos/${generateRandomDimensions(40, 200)}`,
      },
    ],
  },
  {
    id: 5,
    fullName: "Youssef El Khattabi",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Youssef is an expert blacksmith with a passion for creating custom metalworks.",
    location: "Agadir, Morocco",
    availability: false,
    profession: "Blacksmith",
    contact: {
      email: "youssefelkhattabi@gmail.com",
      phone: "+212123456789",
    },
    work: [
      {
        name: "Custom Gate",
        description:
          "A beautifully crafted gate with intricate ironwork designs.",
        url: `https://picsum.photos/${generateRandomDimensions(33, 200)}`,
      },
      {
        name: "Decorative Lantern",
        description:
          "A unique lantern that combines traditional and modern metalworking techniques.",
        url: `https://picsum.photos/${generateRandomDimensions(40, 200)}`,
      },
    ],
  },
];
