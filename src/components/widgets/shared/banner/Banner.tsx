import { IBanner } from "@/types";

export const Banner = ({ title, description, icon }: IBanner) => {
  return (
    <div className="bg-orange-500 py-10 px-6 rounded-tl-3xl rounded-br-3xl rounded">
      <div className="flex items-start justify-start md:flex-row flex-col gap-2 md:gap-5">
        {icon}
        <div className="max-w-3xl space-y-2">
          {title && <h1 className="text-3xl font-bold">{title}</h1>}
          {description && (
            <p className="font-light text-sm leading-6">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
