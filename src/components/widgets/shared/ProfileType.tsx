import { IProfileTypeProps } from "@/types";
import { Pickaxe, Users } from "lucide-react";

export const ProfileType = ({ setSelectedType }: IProfileTypeProps) => {
  return (
    <section className="relative w-screen h-screen divide-x divide-zinc-900 grid grid-cols-1 md:grid-cols-2">
      <div
        tabIndex={0}
        className="group flex justify-center items-center cursor-pointer bg-zinc-800 hover:bg-zinc-800/80 transition-colors duration-500 ease-in-out"
        onClick={() => setSelectedType("artisan")}
      >
        <div className="group-hover:text-orange-400 text-center gap-8 flex justify-center items-center flex-col">
          <h3 className="text-4xl">Become an artisan</h3>
          <Pickaxe
            size={100}
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
      <div
        className="group flex justify-center items-center cursor-pointer bg-zinc-800 hover:bg-zinc-800/80 transition-colors duration-500 ease-in-out"
        onClick={() => setSelectedType("client")}
      >
        <div className="group-hover:text-orange-400 text-center gap-8 flex justify-center items-center flex-col">
          <h3 className="text-4xl">Become a client</h3>
          <Users
            size={100}
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};
