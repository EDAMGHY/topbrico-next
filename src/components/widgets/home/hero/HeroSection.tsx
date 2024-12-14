import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="flex justify-center items-center h-page">
      <div className="space-y-4 md:space-y-8">
        <div className="max-w-[700px] mx-auto text-center px-4 space-y-4 md:space-y-8">
          <h1 className="md:text-5xl leading-[42px] text-3xl md:leading-[55px] font-bold">
            Discover Skilled Artisans Near You
          </h1>
          <p className="text-sm md:text-lg">
            Find skilled artisans to bring your ideas to life. Browse profiles,
            read reviews, and connect with trusted talent near you!
          </p>
        </div>

        <div className="space-y-8 border p-5 border-zinc-800 rounded-xl">
          <div className="flex justify-center items-center w-full gap-4">
            <input
              type="text"
              placeholder="Search for artisans by skill, name, or location..."
              className="h-[40px] w-full border-b border-zinc-800 bg-transparent text-white px-2 focus:outline-none placeholder:text-sm placeholder:text-gray-500 focus:border-orange-400"
            />{" "}
            <Link
              href={"/artisans"}
              className="bg-white hover:bg-orange-400 ease-in-out duration-500 size-[40px] border-2 border-white hover:border-orange-400 inline-flex justify-center items-center text-black inline-flex hover:text-white transition-all shrink-0 rounded-full"
            >
              <Search size={20} />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 md:flex-row flex-col">
            <div className="w-full space-y-2">
              <label
                htmlFor="category"
                className="inline-flex gap-2 items-center"
              >
                <Search size={16} />
                Category:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="category"
                className="inline-flex gap-2 items-center"
              >
                <Search size={16} />
                Artisan:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="category"
                className="inline-flex gap-2 items-center"
              >
                <Search size={16} />
                Location:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* <div className="w-full space-y-2">
              <label
                htmlFor="category"
                className="inline-flex gap-2 items-center"
              >
                <Search size={16} />
                Category:
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
