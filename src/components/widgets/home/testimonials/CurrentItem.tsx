import { ITestimonial } from "@/types";
import { Rating } from "@/ui";

export const CurrentItem = ({ item }: { item: ITestimonial }) => {
  const ratings = Array.from(
    { length: Math.round(item?.rating) || 0 },
    (_, index) => index + 1
  );

  return (
    <div className="lg:col-span-2 w-full p-5 border bg-zinc-900 border-zinc-800 space-y-8 md:space-y-5 rounded">
      {ratings?.length > 0 && (
        <div className="flex justify-start items-center gap-3">
          <Rating rating={item?.rating} />
        </div>
      )}
      <p
        className={`relative after:text-4xl after:content-['”'] after:absolute after:-bottom-7 after:pl-2 after:text-orange-500  before:text-4xl before:text-orange-500 before:content-['“'] before:absolute before:-top-5 before:-left-4`}
      >
        {item.content}
      </p>
      <div className="md:hidden flex justify-center items-end flex-col">
        <h4 className="text-lg font-bold">{item.author}</h4>
        <p className="text-xs text-zinc-600">{item.profession}</p>
      </div>
    </div>
  );
};
