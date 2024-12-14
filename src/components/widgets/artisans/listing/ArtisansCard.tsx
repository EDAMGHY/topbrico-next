import { IArtisan } from "@/types";
import { Avatar, AvatarFallback, AvatarImage, Badge } from "@/ui";
import Link from "next/link";

export const ArtisansCard = (props: IArtisan) => {
  const { availability, fullName, location, picture, profession, id } = props;

  return (
    <article className="relative flex-col flex items-center justify-center gap-4 hover:bg-zinc-900/80 border border-zinc-800 rounded-md w-full p-5">
      <Badge variant={availability ? "default" : "destructive"}>
        {availability ? "Available" : "Unavailable"}
      </Badge>
      <Avatar>
        <AvatarImage src={picture} className="object-cover" alt={fullName} />
        <AvatarFallback>{fullName.slice(0, 2)}</AvatarFallback>
      </Avatar>
      {fullName && (
        <h2 className="text-xl  text-center font-bold ">{fullName}</h2>
      )}
      {profession && (
        <h3 className="text-base text-center font-light text-zinc-500">
          {profession}
        </h3>
      )}
      {location && (
        <span className="text-[10px] bg-zinc-800 font-semibold text-white inline-flex px-2 py-1 leading-6">
          {location}
        </span>
      )}
      <Link
        href={`/artisans/${id}`}
        className="absolute cursor-pointer inset-0 inline-flex z-[10]"
      ></Link>
    </article>
  );
};
