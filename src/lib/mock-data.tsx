import { Search } from "lucide-react";
import { generateRandomDimensions } from "./utils";
import { IArtisan } from "@/types";

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

export const artisans: IArtisan[] = [
  {
    id: 1,
    fullName: "John Doe",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida odio a urna cursus, non laoreet libero tristique. Sed eu blandit lacus. Nullam eros risus, porta id lorem eget, porttitor cursus mauris. Mauris scelerisque, dui aliquam tristique molestie, urna elit eleifend lectus, nec mollis nulla orci et ex. Ut eu tellus vitae ipsum interdum hendrerit. Sed dictum laoreet dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum fringilla vestibulum. Nulla metus ligula, efficitur a ullamcorper eu, convallis quis eros. Sed volutpat porttitor purus, eget mattis tortor porttitor vel. Nam sed lacus rhoncus, sodales eros ut, dictum turpis. Nunc vulputate massa vitae velit vehicula, vitae lobortis neque pharetra. Etiam enim erat, congue ac lorem quis, fringilla lobortis tellus. Etiam sed libero quis quam suscipit dictum. Duis eu porttitor purus, nec dapibus urna!",
    location: "Casablanca, Morocco",
    availability: true,
    rating: 4.5,
    yearsOfExperience: 20,
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
    reviews: [
      {
        id: 1,
        fullName: "Jane Doe",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 4.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 2,
        fullName: "Sam Wilson",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.2,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 3,
        fullName: "Lara Croft",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 2.7,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 4,
        fullName: "Eren Yeager",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
    ],
  },
  {
    id: 2,
    fullName: "Sarah Smith",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Duis dapibus at elit vitae pulvinar. Nullam at mi in libero ultricies volutpat. Donec faucibus erat sit amet nulla dapibus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nisi augue, mollis in lorem mattis, pharetra laoreet velit. Mauris pharetra dui placerat, tempor lectus ac, fermentum tortor. Donec sit amet ultricies diam. Sed viverra, sapien vitae pulvinar vulputate, erat erat cursus est, quis pulvinar nisl tortor porttitor felis. Sed id est nec justo ullamcorper feugiat sit amet ac massa. Nunc ullamcorper pretium erat, non dignissim lectus venenatis quis. Suspendisse arcu tellus, finibus sit amet fringilla eu, dignissim ut enim. Curabitur eu ipsum vel metus efficitur mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu semper augue, sed auctor metus. Curabitur lacinia sit amet velit non imperdiet",
    location: "Rabat, Morocco",
    availability: false,
    profession: "Tailor",
    rating: 3.8,
    yearsOfExperience: 15,
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
    reviews: [
      {
        id: 1,
        fullName: "Jane Doe",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 4.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 2,
        fullName: "Sam Wilson",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.2,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 3,
        fullName: "Lara Croft",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 2.7,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
    ],
  },
  {
    id: 3,
    fullName: "Ahmed Benali",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Pellentesque aliquam tristique urna at venenatis. Curabitur eu viverra tellus. Maecenas eu diam faucibus, eleifend purus non, vestibulum tellus. Praesent hendrerit enim sed tellus ornare lobortis. Duis sodales mollis felis dapibus condimentum. Mauris vitae accumsan dui, eu euismod leo. Quisque facilisis dolor ac neque mattis, nec vulputate elit congue. Maecenas eget ultrices nisl. Nullam ac velit maximus, rutrum lorem a, facilisis enim. Integer blandit leo ac neque malesuada, eu cursus turpis pellentesque",
    location: "Marrakech, Morocco",
    availability: true,
    profession: "Painter",
    rating: 2.2,
    yearsOfExperience: 12,
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
    reviews: [
      {
        id: 1,
        fullName: "Jane Doe",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 4.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 2,
        fullName: "Sam Wilson",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.2,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
    ],
  },
  {
    id: 4,
    fullName: "Fatima Lahlou",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Nam nec consequat urna, interdum hendrerit felis. Morbi ligula diam, varius in neque eu, dapibus accumsan orci. Fusce sapien ligula, venenatis venenatis pulvinar a, tempus sed quam. Nunc a odio sodales, bibendum nibh vitae, tristique libero. Sed pulvinar tincidunt imperdiet. Praesent ultricies tempus suscipit. Praesent suscipit tellus vel lacus rhoncus, vitae convallis orci posuere. Mauris tincidunt ac dui vel fringilla. Curabitur rutrum arcu ante, sit amet tempor augue aliquam nec. Ut justo turpis, placerat ac diam consectetur, faucibus eleifend urna. Nulla suscipit laoreet velit a accumsan. Curabitur gravida et ligula non ultricies.",
    location: "Fes, Morocco",
    availability: true,
    rating: 1.7,
    yearsOfExperience: 8,
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
    reviews: [
      {
        id: 1,
        fullName: "Jane Doe",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 4.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 2,
        fullName: "Sam Wilson",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.2,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 3,
        fullName: "Lara Croft",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 2.7,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 4,
        fullName: "Eren Yeager",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.5,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
      {
        id: 5,
        fullName: "Eren Yeager",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 1.2,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
    ],
  },
  {
    id: 5,
    fullName: "Youssef El Khattabi",
    picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
    bio: "Nulla ac orci vitae lacus posuere placerat. Sed tincidunt nunc ultricies purus vestibulum, et fringilla tellus vulputate. Curabitur ac interdum velit. Vestibulum nec erat tincidunt diam finibus consequat vel vel ante. Praesent commodo metus est, ac pellentesque erat dapibus nec. Maecenas iaculis, nisl eu pharetra luctus, ante ante tincidunt urna, in aliquam erat purus a nulla. Vivamus sit amet bibendum nibh. Fusce ultrices massa ut nunc auctor, ac iaculis nulla tempus",
    location: "Agadir, Morocco",
    availability: false,
    rating: 4.9,
    yearsOfExperience: 4,
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
    reviews: [
      {
        id: 1,
        fullName: "Jane Doe",
        picture: `https://picsum.photos/${generateRandomDimensions(30, 200)}`,
        rating: 3.9,
        review:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo reiciendis commodi quibusdam dicta excepturi ad eligendi autem tempora neque laboriosam consequatur, sunt enim dignissimos nesciunt amet nulla iusto culpa.",
      },
    ],
  },
];
