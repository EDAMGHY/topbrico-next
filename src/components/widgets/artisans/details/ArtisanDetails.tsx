import { IArtisan } from "@/types";
import { WorkSlider } from "./WorkSlider";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export const ArtisanDetails = (props: IArtisan) => {
  const {
    availability,
    bio,
    contact,
    fullName,
    location,
    picture,
    profession,
    work,
  } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <WorkSlider nodes={work} />
      <div className="space-y-6">
        <div className="flex justify-start items-center gap-5 mt-[60px]">
          {picture && (
            <div className="relative w-[200px] aspect-square ">
              <Image
                src={picture}
                alt={fullName}
                fill
                className="object-cover rounded"
              />
              <span
                className={cn(
                  "inline-block absolute right-2 font-light top-2 text-[10px] leading-[16px] rounded py-1 px-2",
                  availability
                    ? "text-green-900 bg-green-600"
                    : "text-red-900 bg-red-600"
                )}
              >
                {availability ? "Available" : "Unavailable"}
              </span>
            </div>
          )}
          <div className="space-y-4">
            <h2 className="relative text-3xl font-bold leading-[40px]">
              {fullName}
            </h2>
            <div className="flex justify-start gap-4 items-center">
              {location && (
                <span className="text-xs bg-zinc-800 font-semibold text-white inline-flex px-4 py-2 leading-6">
                  {location}
                </span>
              )}
              <span className="inline-block size-2 shrink-0 bg-zinc-800 rounded-full"></span>
              <h3 className="text-base text-orange-400 underline underline-offset-4">
                {profession}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-sm leading-6">{bio}</p>

        <ul className="space-y-4">
          {contact?.email && (
            <li className="flex justify-start items-center gap-4">
              <Mail size={24} />
              <span>{contact.email}</span>
            </li>
          )}
          {contact?.phone && (
            <li className="flex justify-start items-center gap-4">
              <Phone size={24} />
              <span>{contact.phone}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
