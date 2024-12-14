import { Search } from "lucide-react";

export const SearchSection = () => {
  return (
    <div className="flex bg-white justify-center rounded-lg overflow-hidden items-center max-w-4/5 mx-auto">
      <input
        type="text"
        className="w-full bg-transparent text-zinc-800 border-none focus:border-0 focus:outline-none rounded-md py-4 px-4"
        placeholder="Search for artisans"
      />
      <button className="inline-flex items-center justify-center text-white bg-orange-400 p-2 w-[56px] shrink-0 aspect-square">
        <Search size={24} />
      </button>
    </div>
  );
};
