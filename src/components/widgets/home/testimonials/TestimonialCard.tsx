import { cn } from "@/lib/utils";
import { ITestimonial } from "@/types";
import Image from "next/image";

export const TestimonialCard = (
  props: ITestimonial & {
    active: boolean;
    onSelect: (item: ITestimonial) => void;
  }
) => {
  const { author, picture, active, profession, onSelect } = props;
  return (
    <div
      onClick={() => onSelect(props)}
      className={cn(
        active
          ? "bg-zinc-900 border-zinc-800"
          : "bg-transparent border-transparent",
        "flex justify-center md:justify-start items-start md:items-center gap-4 p-4 border transition ease-in-out duration-500  rounded cursor-pointer md:flex-row flex-col mdDown:snap-start"
      )}
    >
      {picture && (
        <div className="rounded-full overflow-hidden shrink-0 size-[50px] relative">
          <Image src={picture} alt={author} fill className="object-cover" />
        </div>
      )}
      <div className="md:block hidden">
        <h4 className="text-base md:text-2xl font-bold">{author}</h4>
        <p className="text-xs md:text-sm text-zinc-500">{profession}</p>
      </div>
    </div>
  );
};
